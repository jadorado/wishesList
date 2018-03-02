import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { wishesListService } from './services/wishes-list.service';

import { PendingComponent } from '../pages/pending/pending.component';
import { FinishedComponent} from '../pages/finished/finished.component';
import { AddPage } from '../pages/add/add';
import { DetailPage } from '../pages/detail/detail';

import { PlaceholderPipe } from '../pipes/placeholder/placeholder';
import { PendingsPipe } from '../pipes/pendings/pendings';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingComponent,
    FinishedComponent,
    AddPage,
    DetailPage,
    PlaceholderPipe,
    PendingsPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingComponent,
    FinishedComponent,
    DetailPage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    wishesListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
