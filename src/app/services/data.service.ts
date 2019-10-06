import { Injectable } from '@angular/core';
import { HttpClient, HttpParams , HttpErrorResponse} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  sendQueryMail(_data){
    let url = 'http://localhost:3000/send-mail';
    return this.http.post(url, _data);
  }
}
