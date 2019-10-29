import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule} from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatabindingComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
