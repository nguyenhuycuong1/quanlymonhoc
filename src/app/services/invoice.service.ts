import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor(private http: HttpClient) {}

  updateInvoice(
    invoiceCode: string | null,
    totalFees: number
  ): Observable<any> {
    return this.http.put(environment.API_URL + `/invoice/${invoiceCode}`, {
      totalFees,
    });
  }
  getAllInvoices(): Observable<any> {
    return this.http.get(environment.API_URL + '/invoices');
  }

  truncateTable(): Observable<any> {
    return this.http.delete(environment.API_URL + '/destroy');
  }
}
