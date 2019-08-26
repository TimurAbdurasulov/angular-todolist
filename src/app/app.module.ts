import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TitleComponent, ToDoItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
