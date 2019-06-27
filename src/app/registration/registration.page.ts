import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

export class User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage {
  public user:User = new User();

  constructor(public fAuth: AngularFireAuth, public router: Router) { }

  async register() {
    try {
      var r = await this.fAuth.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        console.log("Successfully registered!");
        this.router.navigate(['/landing'])
      }
    } catch (err) {
      console.error(err);
    }
  }

}
