import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskFeatureModule } from './task-feature/task-feature.module';
import { PageContainerComponent } from './utils/page-container/page-container.component';

@NgModule({
  declarations: [AppComponent, PageContainerComponent],
  imports: [BrowserModule, AppRoutingModule, TaskFeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
