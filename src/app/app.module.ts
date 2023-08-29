import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { BrandLogoComponent } from './pages/brand-logo/brand-logo.component';
import { NewArrivalsComponent } from './pages/new-arrivals/new-arrivals.component';
import { CategoryComponent } from './pages/category/category.component';
import { FooterComponent } from './pages/footer/footer.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BrandLogoComponent,
    NewArrivalsComponent,
    CategoryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
