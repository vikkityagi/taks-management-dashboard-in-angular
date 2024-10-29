import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  userForm:any =  FormGroup;
  user!: User;

  constructor(
    // private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: [''],
      email: [''],
      username: [''],
      notificationEnabled: [false],
    });

    this.loadUserProfile();
  }

  loadUserProfile(): void {
    // this.userService.getUserProfile().subscribe(data => {
    //   this.user = data;
    //   this.userForm.patchValue(data);
    // });
  }

  onSave(): void {
    const updatedUser = { ...this.user, ...this.userForm.value };
    // this.userService.updateUserProfile(updatedUser).subscribe(response => {
    //   console.log('User profile updated:', response);
    //   // Optionally show a success message or redirect
    // });
  }

  onPasswordChange(newPassword: string): void {
    // this.userService.updateUserPassword(newPassword).subscribe(response => {
    //   console.log('Password updated successfully');
    //   // Optionally show a success message
    // });
  }

}
