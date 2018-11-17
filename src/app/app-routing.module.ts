import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChannelDetailsComponent} from './Components/channel-details/channel-details.component';
import {AppComponent} from './app.component';
import {ChannelsListComponent} from './Components/channels-list/channels-list.component';

const routes: Routes = [
  { path: '', component: ChannelsListComponent },
  { path: 'channel/:id', component: ChannelDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
