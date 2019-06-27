import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public menu: MenuController, public actionSheetController: ActionSheetController) { }

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
          console.log('Share clicked');
        }
      }, {
        text: 'Story',
        icon: 'book',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Quote',
        icon: 'quote',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Video',
        icon: 'play-circle',
        handler: () => {
          console.log('Cancel clicked');
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
