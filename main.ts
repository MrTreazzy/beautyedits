import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYCeOE2xF_mEx4X7SK9KHySYdzzvQRZvI",
  authDomain: "beautyeditsdbusers.firebaseapp.com",
  databaseURL: "https://beautyeditsdbusers-default-rtdb.firebaseio.com",
  projectId: "beautyeditsdbusers",
  storageBucket: "beautyeditsdbusers.appspot.com",
  messagingSenderId: "319030351875",
  appId: "1:319030351875:web:d10761f32edb7d06c81636"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
