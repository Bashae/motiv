import { Component } from '@angular/core';
import { ActionSheetController, MenuController, ModalController } from '@ionic/angular';
import { AuthService } from './../auth.service';
import { AddPostPage } from '../add-post/add-post.page';
import { StreamService } from '../stream.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: any[];

  constructor(
    public menu: MenuController,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController,
    public authService: AuthService,
    public streamService: StreamService
  ) { 
    this.streamService.getPosts('all').subscribe(posts => {
      this.posts = posts;
      console.log('what is posts');
      console.log(posts)
    });
  }

  logOutUser() {
    this.authService.logOut();
  }

  togglePost($ev) {
    let target = $ev.target.closest('.item');
    if(target.classList.contains('active')) {
      this.unlikePost(target);
    } else {
      this.likePost(target);
    }
  }

  likePost($tar) {
    $tar.classList.add('active');
  }

  unlikePost($tar) {
    $tar.classList.remove('active');
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  loadStream(type) {
    console.log('stream loaded with type: ' + type);
  }

  async presentModal(type) {
    const modal = await this.modalController.create({
      component: AddPostPage,
      componentProps: {
        type: type
      }
    });
    return await modal.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'What would you like to post?',
      buttons: [{
        text: 'Story',
        icon: 'book',
        handler: () => {
          this.presentModal('story');
        }
      }, {
        text: 'Quote',
        icon: 'quote',
        handler: () => {
          this.presentModal('quote');
        }
      },{
        text: 'Goal',
        icon: 'ribbon',
        handler: () => {
          this.presentModal('goal');
        }
      }, {
        text: 'Achievement',
        icon: 'trophy',
        handler: () => {
          this.presentModal('achievement');
        }
      }]
    });
    await actionSheet.present();
  }

}
