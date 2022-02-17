import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainConceptsComponent } from './components/main-concepts/main-concepts.component';
import { CommonModule } from '@angular/common';
import { LayoutConceptsComponent } from './components/layout-concepts/layout-concepts.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ComponentsCardsComponent } from './components/components-cards/components-cards.component';
import { ComponentsButtonsComponent } from './components/components-buttons/components-buttons.component';
import { ComponentsFormsComponent } from './components/components-forms/components-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    MainConceptsComponent,
    LayoutConceptsComponent,
    NavbarComponent,
    ComponentsCardsComponent,
    ComponentsButtonsComponent,
    ComponentsFormsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
