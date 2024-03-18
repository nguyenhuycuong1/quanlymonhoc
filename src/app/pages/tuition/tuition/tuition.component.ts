import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';
import { InvoiceService } from '../../../services/invoice.service';

@Component({
  selector: 'app-tuition',
  templateUrl: './tuition.component.html',
  styleUrl: './tuition.component.scss',
})
export class TuitionComponent implements OnInit {
  subjectList: any;
  registeredList: any;
  private checkExists: boolean | null;
  semeId: string | null;
  charge: number;
  totalFees: number;
  constructor(
    private subjectService: SubjectService,
    private invoiceService: InvoiceService
  ) {
    this.semeId = null;
    this.checkExists = null;
    this.registeredList = [];
    this.subjectList = [];
    this.charge = 0;
    this.totalFees = this.registeredList.reduce(
      (a: any, b: any) => a + b.Subject.credit * b.Subject.coe * this.charge,
      0
    );
  }
  ngOnInit(): void {
    this.subjectService.getSubRegistered(this.semeId).subscribe((res) => {
      this.registeredList = res.data;
    });
    this.subjectService
      .getCharge()
      .subscribe((res) => (this.charge = res.charge));
    this.getTotalFee();
  }

  getSubjectName(semeId: string | null) {
    this.subjectService
      .getSubjectName(semeId)
      .subscribe((res) => (this.subjectList = res.data));
  }
  checkRegistered(subjectCode: string) {
    return new Promise<void>((resolve, reject) => {
      this.subjectService.checkExists(subjectCode, this.semeId).subscribe(
        (res) => {
          this.checkExists = res;
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async addOrRemoveItem(subjectCode: string) {
    await this.checkRegistered(subjectCode);
    if (!this.checkExists) {
      this.subjectService
        .register(this.semeId, subjectCode)
        .subscribe((res) => {
          this.getRegisteredList(this.semeId);
        });
    } else {
      this.subjectService
        .cancelRegister(this.semeId, subjectCode)
        .subscribe((res) => {
          this.getRegisteredList(this.semeId);
        });
    }
  }
  getRegisteredList(invoiceCode: string | null) {
    this.subjectService.getSubRegistered(invoiceCode).subscribe((res) => {
      this.registeredList = res.data;
      this.getTotalFee();
      this.updateInvoice();
    });
  }
  getTotalFee(): void {
    if (this.registeredList.length < 1) {
      this.totalFees = 0;
    } else {
      this.totalFees = this.registeredList.reduce(
        (a: any, b: any) => a + b.Subject.credit * b.Subject.coe * this.charge,
        0
      );
    }
  }
  updateInvoice() {
    this.invoiceService
      .updateInvoice(this.semeId, this.totalFees)
      .subscribe((res) => console.log(res));
  }
}
