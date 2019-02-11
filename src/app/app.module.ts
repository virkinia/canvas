import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { CuadradoComponent } from "../components/cuadrado/cuadrado";
import { CustomHammerConfig } from "./CustomHammerConfig";
import { RotateCustomDirective } from "../directives/rotate-custom";
import { DraggableDirective } from "../directives/app-draggable";
import { MovableDirective } from "../directives/app-movable";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CuadradoComponent,
    RotateCustomDirective,
    DraggableDirective,
    MovableDirective
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: CustomHammerConfig
    }
  ]
})
export class AppModule {}
