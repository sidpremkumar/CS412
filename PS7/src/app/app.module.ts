import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopComponentComponent } from './components/top-component/top-component.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { BottomComponentComponent } from './components/bottom-component/bottom-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponentComponent,
    ParentComponentComponent,
    BottomComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
