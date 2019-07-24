import { Component } from '@angular/core';
import { ActionSheetController, MenuController, ModalController } from '@ionic/angular';
import { AuthService } from './../auth.service';
import { AddPostPage } from '../add-post/add-post.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public menu: MenuController,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController,
    public authService: AuthService
  ) { }

  logOutUser() {
    this.authService.logOut();
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
