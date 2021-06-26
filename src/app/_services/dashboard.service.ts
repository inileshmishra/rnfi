import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

/**
 * Formdata interface.
 */
import { FormObject } from '../_interface/formData.interface';

/**
 * Get api after user login.
 */
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Dashboard data.
   */
  getDynamicFormData(token, authToken): Observable<any> {
    const body = new HttpParams()
      .set('token', token)
      .append('authToken', authToken);

    return this.httpClient.post<FormObject>('https://paysprint.in/service-api/testangular/api/TestAngular/getDynamicform', body, {
      headers: { 'Authkey': 'test-angular-2021' }
    }
    );
  }

  /**
   * Update dashboard data.
   */
  updateDynamicFormData(token, authToken, json): Observable<any> {
    const body = new HttpParams()
      .set('token', token)
      .append('authToken', authToken)
      .append('json', json);

    return this.httpClient.post<FormObject>('https://paysprint.in/service-api/testangular/api/TestAngular/createDynamicform', body, {
      headers: { 'Authkey': 'test-angular-2021' }
    }
    );
  }

}
