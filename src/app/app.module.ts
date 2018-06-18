import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmpnentComponent } from './cmpnent/cmpnent.component';
import { UserCardComponent } from './user-card/user-card.component';
import { GetUserService } from './get-user.service';

@NgModule({
  declarations: [
    AppComponent,
    CmpnentComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
