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
    AccountprofileComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path:'homepage',component:HomepageComponent},
      {path:'',component:HomepageComponent},
      {path:'account',component:AccountprofileComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
