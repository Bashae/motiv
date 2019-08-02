import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postCollection: AngularFirestoreCollection;

  constructor(public afs: AngularFirestore, public authService: AuthService) {
    this.postCollection = this.afs.collection('p');
  }

  addPost(post) {
    let _that = this;
    post['uid'] = this.authService.userId;
    return this.postCollection.add(post);
  }

  updatePost(post, data) {
    this.postCollection.doc(post).update(data);
  }

  // getGym(gym) {

  // }

}