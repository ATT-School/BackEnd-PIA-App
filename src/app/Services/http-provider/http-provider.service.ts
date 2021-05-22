import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  
  port: number = 44310;
  baseUrl : string = `https://localhost:${this.port}/api/`
  token: string;


  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    let url = this.baseUrl + `Login?username=${username}&password=${password}`;
    let success = new Subject<boolean>();

    this.http.get(url).subscribe(
      (data: any) => {
        this.token = data.token;
        success.next(true);
      },
      (err) => {
        console.log(err);
        success.next(false);
      }
    );

    return success.asObservable();
  }

  getRequest<T>(component: string, endpoint: string = "") {
    let url = this.baseUrl + component + "/" + endpoint;

    let headers: HttpHeaders = new HttpHeaders({'Authorization': 'Bearer ' + this.token,});

    return this.http.get<T>(url, {headers: headers});
  }

  postRequest(component: string, bodyParams: any) {
    let url = this.baseUrl + component;

    return this.http.post(url, bodyParams);
  }

  putRequest(component: string, endpoint: string = "", bodyParams: any) {
    let url = this.baseUrl + component + "/" + endpoint;

    return this.http.put<string>(url, bodyParams);
  }

  deleteRequest(component: string, endpoint: string = "") {
    let url = this.baseUrl + component + "/" + endpoint;

    return this.http.delete(url);
  }
}
