import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/global/services/alert.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  message: any;
  showToast: boolean = false;
  isSubscribed: Subscription | undefined;

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.isSubscribed = this.alertService.alertMessage$.subscribe(resp => {
      if(resp){
        this.message = resp;
        this.showToast = true;
        console.log('this is toast', this.message);
      }

      setTimeout(() => {
        this.showToast = false; 
      }, 6000)
    })
  }

  close(){
    this.showToast = !this.showToast;
  }

}
