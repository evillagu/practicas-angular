import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListUserExampleComponent } from './lists/list_userExample/list-user-example/list-user-example.component';
import { MaterialStyleModule } from './material/material-style/material-style.module';
import { FormExampleComponent } from './forms/form-example/form-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FromExampleService } from './services/from-example.service';

@NgModule({
  declarations: [
    AppComponent,
    ListUserExampleComponent,
    FormExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialStyleModule, 
    ReactiveFormsModule

  ],
  providers: [FromExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
