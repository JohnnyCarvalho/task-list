import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Component
import { HeaderComponent } from './modules/components/header/header.component';
import { ToDoButtonDeleteAllComponent } from './modules/components/to-do-button-delete-all/to-do-button-delete-all.component';
import { ToDoInputAddItensComponent } from './modules/components/to-do-input-add-itens/to-do-input-add-itens.component';
import { ToDoListComponent } from './modules/components/to-do-list/to-do-list.component';
import { HomeModule } from './modules/home/home.module';

//Page
import { HomeComponent } from './modules/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoButtonDeleteAllComponent,
    ToDoInputAddItensComponent,
    ToDoListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
