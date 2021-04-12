import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getApiURL(theme:any, endpoint:any){
    return environment[theme]['en_GB'][endpoint];

  }
  postRequest(theme:any, endpoint: string, jsonBody: object):Observable<any>{
    return this.http.post<any>(this.getApiURL(theme, endpoint), jsonBody)
  }
}


