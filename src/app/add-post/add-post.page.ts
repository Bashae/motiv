import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {
  @Input() type: string;
  bgColor: string = "#5f9ea0";
  recentColors: string[] = [];

  constructor(
    public modalController: ModalController,
    private imagePicker: ImagePicker
  ) { }

  ngOnInit() {
    console.log('the type is: ' + this.type);
  }

  changeColor(event) {
    if(event && event.target)
      var color = event.target.value;
      this.bgColor = color;
      this.recentColors.push(color);
  }

  pickImage() {
    let options;
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
