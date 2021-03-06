import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material/material.module';
import { HeaderComponent } from './component/header/header.component';
import { AccountviewComponent } from './component/accountview/accountview.component';
import { BillboardComponent } from './component/billboard/billboard.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { ServiceCardComponent } from './component/service-card/service-card.component';
import { ServiceListComponent } from './component/service-list/service-list.component';
import { BillboardWideComponent } from './component/billboard-wide/billboard-wide.component';
import { SearchbarComponent } from './component/searchbar/searchbar.component';
import { AccountprofileComponent } from './component/accountprofile/accountprofile.component';
import { RatingComponent } from './component/rating/rating.component';
import { LoginComponent } from './component/login/login.component';
import { TextboxComponent } from './component/textbox/textbox.component';
import { FormsModule } from '@angular/forms';
import { ServicepageComponent } from './component/servicepage/servicepage.component';
import { CommentComponent } from './component/comment/comment.component';
import { ConnectService } from './service/connect/connect.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './component/register/register.component';
import { UploadfileComponent } from './component/uploadfile/uploadfile.component';

@NgModule({
  declarations: [			
    AppComponent,
    HeaderComponent,
    AccountviewComponent,
    BillboardComponent,
    HomepageComponent,
    ServiceCardComponent,
    ServiceListComponent,
    BillboardWideComponent,
    SearchbarComponent,
    AccountprofileComponent,
    RatingComponent,
    LoginComponent,
    TextboxComponent,
    ServicepageComponent,
    CommentComponent,
    RegisterComponent,
    UploadfileComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path:'homepage',component:HomepageComponent},
      {path:'',component:HomepageComponent},
      {path:'account',component:AccountprofileComponent},
      {path:'login',component:LoginComponent},
      {path:'service/:id',component:ServicepageComponent},
      {path:'register',component:RegisterComponent}
    ]),
    FormsModule,HttpClientModule
  ],
  providers: [ConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
