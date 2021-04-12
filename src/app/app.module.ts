import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './global/component/layout/header/header.component';
import { FooterComponent } from './global/component/layout/footer/footer.component';
import { TestimonialComponent } from './global/component/shared/testimonial/testimonial.component';
import { CtaComponent } from './global/component/layout/cta/cta.component';
import { FeaturedComponent } from './global/component/shared/featured/featured.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageBannerComponent } from './landing-page/landing-page-banner/landing-page-banner.component';
import { PaymentFormComponent } from './global/component/form/payment-form/payment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './global/component/alert/toast/toast.component';
import { AlertService } from './global/services/alert.service';
import { HomeComponent } from './home/home.component';
import { ClickOutsideDirective } from './global/directives/click-outside-directive';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './global/store/reducers/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestimonialComponent,
    CtaComponent,
    FeaturedComponent,
    LandingPageComponent,
    LandingPageBannerComponent,
    PaymentFormComponent,
    ToastComponent,
    HomeComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      users: UserReducer
    }),
  ],
  providers: [
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
