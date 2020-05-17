import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './custome-components/todos/todos.component';
import { TodosItemComponent } from './custome-components/todos-item/todos-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
