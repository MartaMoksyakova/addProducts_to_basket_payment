import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ngxUiLoaderConfig } from './preload.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { BasketComponent } from './pages/basket/basket.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CurrencyPipe} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { MatDialogModule} from '@angular/material/dialog';
import { OrderComponent } from './pages/order/order.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    BasketComponent,
    ProductDetailsComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    CurrencyPipe,
    MatTableModule,
    MatStepperModule,
    MatFormFieldModule,
    CdkStepperModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
