import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})

export class AlertService {
  private alertMessageSource = new Subject<any>();
  alertMessage$ = this.alertMessageSource.asObservable();
  
  success(message: string) {
    this.alertMessageSource.next({
      type: 'success',
      text: message
    })
  }

  error(message: string){
    this.alertMessageSource.next({
      type: 'error',
      text: message
    })
  }
}
