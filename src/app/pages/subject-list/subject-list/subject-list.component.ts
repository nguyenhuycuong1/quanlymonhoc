import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { SubjectService } from '../../../services/subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.scss',
})
export class SubjectListComponent implements OnInit {
  subjects: any;
  semeId: string;
  editingSubejct: any;
  confirmDeleteModal?: NzModalRef;
  constructor(
    private subjectService: SubjectService,
    private modal: NzModalService,
    private router: Router
  ) {
    this.semeId = 'all';
  }
  ngOnInit(): void {
    this.subjectService
      .getAllSubject()
      .subscribe((res) => (this.subjects = res.data));
  }
  getListSubject(semeId: string | null) {
    if (semeId === 'all' || semeId === null) {
      this.subjectService
        .getAllSubject()
        .subscribe((res) => (this.subjects = res.data));
    } else {
      this.subjectService
        .getSubjectBySeme(semeId)
        .subscribe((res) => (this.subjects = res.data));
    }
    console.log(this.subjects);
  }
  editSubject(editingSubejct: any) {
    this.editingSubejct = editingSubejct;
  }
  saveSubject() {
    // call API
    this.editingSubejct = null;
  }
  showConfirmDelete(subjectCode: string): void {
    this.confirmDeleteModal = this.modal.confirm({
      nzTitle: 'Bạn có chắc chắn muốn xóa môn học này không?',
      nzOkDanger: true,
      nzOkText: 'Xóa',
      nzCancelText: 'Hủy',
      nzOnOk: () => {
        this.deleteSubject(subjectCode);
      },
    });
  }
  deleteSubject(subjectCode: string) {
    this.subjectService
      .deleteSubject(subjectCode)
      .subscribe((res) => this.getListSubject(this.semeId));
  }
  navigateTo(destination: string): void {
    this.router.navigate([destination]);
  }
}
