import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppConstant } from 'src/app/global/constants/appConstant';
import { AppState } from 'src/app/global/model/app-state.model';
import { CountryCode } from 'src/app/global/model/country-code';
import { CreatePaymentRequest } from 'src/app/global/model/create-payment-request';
import { AlertService } from 'src/app/global/services/alert.service';
import { RequestService } from 'src/app/global/services/request.service';
import { AddUsersAction } from 'src/app/global/store/actions/user.actions';
import * as countryCodeData from './../../../json-data/countryCode.json'
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  countryCode: CountryCode[] = (countryCodeData as any).default;
  paymentForm!: FormGroup;
  isFormSubmitted: boolean = false;
  isDropDown: boolean = false;
  selectedDialCode: any = AppConstant.defaultDialCode;
  selectedCountryCode: string = AppConstant.defaultCountryCode;
  createPaymentRequest: CreatePaymentRequest = new CreatePaymentRequest();

  constructor(
    private fb: FormBuilder,
    private requestService: RequestService,
    private alertService: AlertService,
    private router: Router,
    private routes: ActivatedRoute,
    private store:Store<AppState>) {
  }

  ngOnInit(): void {
    this.formSetup();
    console.log(this.countryCode)
  }

  toggleDropDown() {
    this.isDropDown = !this.isDropDown;
  }
  clickOutside() {
    this.isDropDown = false;
  }
  selectedCode(code: any) {
    console.log('selected code', code);
    this.selectedCountryCode = `${code.name} (${code.code})`;
    this.selectedDialCode = code.dial_code;
  }

  formSetup() {
    this.paymentForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      monthlyBudget: ['', [
        Validators.required,
        Validators.pattern("^[0-9]*$")]],
      number: ['', [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(8)]]
    })
  }

  get firstName(): any {
    return this.paymentForm.get("firstName");
  }
  get lastName() {
    return this.paymentForm.get("lastName");
  }
  get email() {
    return this.paymentForm.get("email");
  }
  get monthlyBudget() {
    return this.paymentForm.get("monthlyBudget");
  }
  get number() {
    return this.paymentForm.get("number");
  }

  createPayment() {
    this.isFormSubmitted = true;

    if (this.paymentForm.invalid) {
      return;
    }

    this.createPaymentRequest.firstName = this.firstName.value;
    this.createPaymentRequest.lastName = this.lastName.value;
    this.createPaymentRequest.email = this.email.value;
    this.createPaymentRequest.monthlyBudget = this.monthlyBudget.value;
    this.createPaymentRequest.number = this.number.value;

    this.store.dispatch(new AddUsersAction(this.createPaymentRequest));
    this.requestService.postRequest('filed', 'createPaymentRequest', this.createPaymentRequest)
      .subscribe(response => {
        if (response) {
          console.log(response);
          setTimeout(()=>{
            this.alertService.success("Thank you! your form has beem submitted"); 
          }, 1000)

          this.router.navigate(["/"], {
            relativeTo: this.routes
          })
          
        }
      }, error => {
        this.alertService.error("Something went wrong! please try again later")
      })
  }

}
