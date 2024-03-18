import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../../services/invoice.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
})
export class InvoiceComponent implements OnInit {
  confirmModal?: NzModalRef;
  invoices: any;
  totalsub: number;
  totalCredit: number;
  totalFees: number;
  constructor(
    private invoiceService: InvoiceService,
    private modal: NzModalService,
    private router: Router
  ) {
    this.invoices = [];
    this.totalsub = 0;
    this.totalCredit = 0;
    this.totalFees = 0;
  }
  ngOnInit(): void {
    this.invoiceService.getAllInvoices().subscribe((res) => {
      this.invoices = res.data;
      this.getFigure();
    });
  }
  getFigure(): void {
    this.totalsub = 0;
    this.totalCredit = 0;
    this.totalFees = 0;

    if (this.invoices.length > 0) {
      for (let item of this.invoices) {
        this.totalCredit += item.total_credit || 0;
        this.totalsub += item.total_sub || 0;
        this.totalFees += item.totalFees || 0;
      }
    }
  }
  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Bạn có muốn xóa dữ liệu không?',
      nzContent: 'Khi bạn nhấn nút Xóa, bạn sẽ phải nhập lại dữ liệu.',
      nzOkDanger: true,
      nzOkText: 'Xóa',
      nzCancelText: 'Hủy',
      nzOnOk: () => {
        this.invoiceService.truncateTable().subscribe((res) => {
          this.router.navigate(['/home']);
        });
      },
    });
  }
}
