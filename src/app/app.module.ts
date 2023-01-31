import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './pai/filho/filho.component';
import { LayoutResponsivoComponent } from './layout-responsivo/layout-responsivo.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { TemplateAccessComponent } from './template-access/template-access.component';
import { BasicHighightDirective } from './directive/basic-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ObservableComponent,
    MenuComponent,
    FormComponent,
    PaiComponent,
    FilhoComponent,
    LayoutResponsivoComponent,
    LifeCycleComponent,
    TemplateAccessComponent,
    BasicHighightDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
