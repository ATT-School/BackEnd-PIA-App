import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  
  port: number = 44310;
  baseUrl : string = `https://localhost:${this.port}/api/`


  constructor(private http: HttpClient) { }

  getRequest<T>(component: string, endpoint: string = "") {
    let url = this.baseUrl + component + "/" + endpoint;
    
    return this.http.get<T>(url);
  }

  postRequest(component: string, bodyParams: any) {
    let url = this.baseUrl + component;

    let headers = new HttpHeaders();
    headers.append("Content-Type", "text/html");

    return this.http.post(url, bodyParams, {responseType: 'text'});
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
