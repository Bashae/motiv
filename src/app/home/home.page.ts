import { Component } from '@angular/core';
import { ActionSheetController, MenuController } from '@ionic/angular';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public menu: MenuController,
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

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'What would you like to post?',
      buttons: [{
        text: 'Stream',
        icon: 'list',
        handler: () => {
          console.log('Stream clicked');
        }
      }, {
        text: 'Story',
        icon: 'book',
        handler: () => {
          console.log('Story clicked');
        }
      }, {
        text: 'Quote',
        icon: 'quote',
        handler: () => {
          console.log('Quote clicked');
        }
      }, {
        text: 'Video',
        icon: 'play-circle',
        handler: () => {
          console.log('Video clicked');
        }
      }, {
        text: 'Support',
        icon: 'flame',
        handler: () => {
          console.log("Support clicked");
        }
      }]
    });
    await actionSheet.present();
  }

}
