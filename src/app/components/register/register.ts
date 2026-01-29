import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Userservice } from '../../services/userservice/userservice';
import { Router } from '@angular/router';
import { IUser } from '../../models/iuser';
import { Notificationservice } from '../../services/toastrNotificationService/notificationservice';

@Component({
  imports:[ReactiveFormsModule],
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {
  user!: IUser;

  constructor(private _userService: Userservice,
              private _router: Router,
              private _notificationService:Notificationservice) {}

  profileForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    avatar: new FormControl('')
  });

  onSubmit() {
    if (this.profileForm.valid) {
      this.user = this.profileForm.value as IUser;
      this._userService.adduser(this.user).subscribe({
        next: () => {
            this._router.navigateByUrl('/home')
            this._notificationService.success('user registerd sccessfully','success');
        },
        error: (err) =>{
           this._router.navigateByUrl('/home')
          this._notificationService.error('user failed to  register','error');
        }
      });
    }
  }

  cancelSave() {
    this._router.navigateByUrl('/home');
  }
}
