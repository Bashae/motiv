import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { PostService } from '../post.service';
import { UserService } from '../user.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {
  @Input() type: string;
  bgColor: string = "#5f9ea0";
  recentColors: string[] = [];

  postText: string = "";
  takenImages: any[] = [];
  uploadedImages: any[] = [];

  constructor(
    public modalController: ModalController,
    public imagePicker: ImagePicker,
    public postService: PostService,
    public userProvider: UserService,
    public camera: Camera
  ) { }

  ngOnInit() {
    console.log('the type is: ' + this.type);
  }

  getImages() {
    let options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      maximumImagesCount: 3,
      
      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      // width: int,
      // height: int,
      
      // quality of resized image, defaults to 100
      // quality: int (0-100),
  
      // output type, defaults to FILE_URIs.
      // available options are 
      // window.imagePicker.OutputType.FILE_URI (0) or 
      // window.imagePicker.OutputType.BASE64_STRING (1)
      // outputType: int
  };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

  takePhoto() {
    console.log('take photo')
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
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

  createPost(t) {
    var type = t;
    var item = this.getTypeObject(type);
    
    this.postService.addPost(item).then(data => {
      this.modalController.dismiss({
        'dismissed': true
      });
    })
  }

  getTypeObject(type) {
    let item = {
      t: type,
      te: this.postText
    }

    if(type == 'q') {
      item['bgc'] = this.bgColor;
    }
    if(type == 's') {
      item['images'] = [];
    }
    if(type == 'g' || type == 'a') {
      item['bgi'] = [];
    }

    return item;
  }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
