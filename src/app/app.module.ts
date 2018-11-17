import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChannelsListComponent } from './Components/channels-list/channels-list.component';
import { ChannelDetailsComponent } from './Components/channel-details/channel-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelsListComponent,
    ChannelDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
