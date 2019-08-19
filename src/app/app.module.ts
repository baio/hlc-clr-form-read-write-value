import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HlcClrFormModule } from '@ng-holistic/clr-forms'
import { DataService } from './data.service';

// CLARITY ICONS DEPENDENCY: THIS REQUIRED ONLY IN STACKBLITZ SEE #700
import '@clr/icons';
import '@clr/icons/shapes/all-shapes';
//


@NgModule({
  imports: [ BrowserModule, HttpClientModule,  HlcClrFormModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
