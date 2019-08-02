import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  postCollection: AngularFirestoreCollection;

  constructor(public afs: AngularFirestore, public authService: AuthService) {
    this.postCollection = this.afs.collection('p');
  }

  getPosts(type){
    return this.postCollection.valueChanges();
  }
}
