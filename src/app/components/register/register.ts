import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    avatar: new FormControl('',[Validators.required])
  });

  onSubmit() {
    if (this.profileForm.valid) {
      this.user = this.profileForm.value as IUser;
      this._userService.adduser(this.user).subscribe({
        next: () => {
            this._router.navigateByUrl('/login')
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

  get name(){
    return this.profileForm.get('name');
  }
   get email(){
    return this.profileForm.get('email');
  }
   get password(){
    return this.profileForm.get('password');
  }
   get avatar(){
    return this.profileForm.get('avatar');
  }

}
