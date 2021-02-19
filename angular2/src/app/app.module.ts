import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FileUploadComponent } from './components/fileUpload/fileUpload.component';
import { ServicelistComponent } from './components/servicelist/servicelist.component'
import { ButtonHighlightDirective } from './directives/buttonHighlight.directive'
import { MenuComponent } from './components/menu/menu.component'
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { ConnectGetService } from './services/connectGet.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './components/register/register.component';
import { AccountViewComponent } from './components/accountView/accountView.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ServiceSpaceComponent } from './components/serviceSpace/serviceSpace.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ServicelistComponent,
    ButtonHighlightDirective,
    MenuComponent,
    LoginComponent,
    FileUploadComponent,
    RegisterComponent,
    AccountViewComponent,
    ServiceSpaceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:BodyComponent},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'service/:id',component:ServiceSpaceComponent}]),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule
  ],
  providers: [ConnectGetService],
  bootstrap: [AppComponent]
})
export class AppModule{ 

}
