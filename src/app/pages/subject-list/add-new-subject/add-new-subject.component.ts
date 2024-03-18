import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { SubjectService } from '../../../services/subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-subject',
  templateUrl: './add-new-subject.component.html',
  styleUrl: './add-new-subject.component.scss',
})
export class AddNewSubjectComponent {
  subjectForm!: FormArray;
  constructor(private subjectService: SubjectService, private router: Router) {
    this.subjectForm = new FormArray([
      new FormGroup({
        subjectCode: new FormControl('', [
          Validators.required,
          Validators.maxLength(5),
        ]),
        subjectName: new FormControl('', [Validators.required]),
        credit: new FormControl('', [Validators.required, this.checkNumber]),
        coe: new FormControl('', [Validators.required, this.checkNumber]),
        semeCode: new FormControl('k1'),
      }),
    ]);
  }
  submitForm() {
    const subjects = this.subjectForm.value;
    this.subjectService
      .createNewSubject(subjects)
      .subscribe((res) => this.router.navigate(['/subject-list']));
  }
  getErrorMsg(ctrlName: string, index: number): string {
    const control = this.subjectForm.at(index).get(ctrlName);

    if (control && control.errors) {
      const error = control?.errors;
      if (error['required']) {
        return 'Không được bỏ trống';
      } else if (error['maxlength']) {
        return 'Không được quá 5 ký tự';
      } else if (error['isNan']) {
        return 'Giá trị nhập vào phải là số';
      } else {
        return 'Lỗi không xác định';
      }
    }

    return '';
  }
  checkNumber(control: AbstractControl): ValidationErrors | null {
    const check = control.value;
    if (isNaN(check)) return { isNan: true };
    return null;
  }

  get subjectFormArray(): FormGroup[] {
    return this.subjectForm.controls as FormGroup[];
  }
  addFormArray() {
    const group = new FormGroup({
      subjectCode: new FormControl('', [
        Validators.required,
        Validators.maxLength(5),
      ]),
      subjectName: new FormControl('', [Validators.required]),
      credit: new FormControl('', [Validators.required, this.checkNumber]),
      coe: new FormControl('', [Validators.required, this.checkNumber]),
      semeCode: new FormControl('k1'),
    });
    this.subjectForm.push(group);
  }
}
