import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from '../app/rest.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndustryComponent } from './industry/industry.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatSlideToggleModule, MatTableModule, MatDialogModule, MatCardModule } from '@angular/material';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndustryComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserAnimationsModule, 
    MatButtonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'', component: MainPageComponent },
      { path:'home', component: HomeComponent },
      { path:'industry', component: IndustryComponent },
    ])
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
