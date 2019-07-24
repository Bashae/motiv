import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {
  @Input() type: string;
  bgColor: string = "#5f9ea0";

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    console.log('the type is: ' + this.type);
  }

  changeColor(event) {
    if(event && event.target) 
      this.bgColor = event.target.value;
  }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
