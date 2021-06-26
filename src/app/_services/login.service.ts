import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }


  /**
   * When user click on login.
   */
  submitLogin(username, password, token): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .append('password', password)
      .append('token', token);

    return this.httpClient.post('https://rnfi.co.in/latest-backup/api/app/task/login/login', body
    );
  }

 /**
  * When user submit otp.
  */
  submitOtp(token, authToken, otp): Observable<any> {
    const body = new HttpParams()
      .set('token', token)
      .append('authToken', authToken)
      .append('otp', otp);

    return this.httpClient.post('https://rnfi.co.in/latest-backup/api/app/task/login/verifyOtp', body
    );
  }

}
