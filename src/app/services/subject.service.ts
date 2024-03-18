import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}

  getAllSubject(): Observable<any> {
    return this.http.get(environment.API_URL + '/subjects');
  }
  getSubjectBySeme(semeId: string): Observable<any> {
    return this.http.get(environment.API_URL + `/subjects/${semeId}`);
  }
  deleteSubject(subjectCode: string): Observable<any> {
    return this.http.delete(environment.API_URL + `/subjects/${subjectCode}`);
  }
  createNewSubject(subjects: any): Observable<any> {
    return this.http.post(environment.API_URL + '/subjects', subjects);
  }
  getSubjectName(semeId: string | null): Observable<any> {
    return this.http.get(environment.API_URL + `/subject-name/${semeId}`);
  }
  checkExists(
    subjectCode: string,
    invoiceCode: string | null
  ): Observable<any> {
    return this.http.get(
      environment.API_URL + `/rs-exist/${invoiceCode}/${subjectCode}`
    );
  }
  register(invoiceCode: string | null, subCode: string): Observable<any> {
    return this.http.post(
      environment.API_URL + `/registered-sub/${invoiceCode}`,
      { subCode }
    );
  }
  cancelRegister(invoiceCode: string | null, subCode: string): Observable<any> {
    return this.http.delete(
      environment.API_URL + `/registered-sub/${invoiceCode}/${subCode}`
    );
  }
  getSubRegistered(invoiceCode: string | null): Observable<any> {
    return this.http.get<any>(
      environment.API_URL + `/registered-sub/${invoiceCode}`
    );
  }
  getCharge(): Observable<any> {
    return this.http.get<any>(environment.API_URL + '/charge');
  }
}
