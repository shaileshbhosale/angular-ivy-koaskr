import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './components/stepper/stepper.component';
import { BannerComponent } from './components/banner/banner.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    BannerComponent,
    SetPasswordComponent,
    FaqComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDividerModule,
    MatStepperModule,
    MatProgressBarModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
