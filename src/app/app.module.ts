import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostPage } from './add-post/add-post.page';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { PostService } from './post.service';
import { UserService } from './user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { Camera } from '@ionic-native/camera/ngx';

let firebaseConfig = {
  apiKey: "AIzaSyCVPfWyPEvevbtoo_-fb5fTLR81FCmMF0s",
  authDomain: "impetus-a92aa.firebaseapp.com",
  databaseURL: "https://impetus-a92aa.firebaseio.com",
  projectId: "impetus-a92aa",
  storageBucket: "",
  messagingSenderId: "378061865266",
  appId: "1:378061865266:web:cde0024a24e65a54"
}

@NgModule({
  declarations: [AppComponent, AddPostPage],
  entryComponents: [AddPostPage],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule],
  providers: [
    ImagePicker,
    StatusBar,
    SplashScreen,
    AuthService,
    PostService,
    UserService,
    AngularFirestore,
    Camera,
    ImagePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
