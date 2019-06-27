import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

export class User {
  email: string;
  password: string;
}


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
  public user:User = new User();

  constructor(public fAuth: AngularFireAuth, public router: Router) { }

  async login() {
    try {
      var r = await this.fAuth.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        console.log("Successfully logged in!");
        this.router.navigate(['/home'])
      }

    } catch (err) {
      console.error(err);
    }
  }

}
