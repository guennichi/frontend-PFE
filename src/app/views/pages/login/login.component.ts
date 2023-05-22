import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private authService: AuthService, private toast: ToastrService) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      Email: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.authService.Login(this.loginForm.value).subscribe(
      (response: any) => {
        this.toast.success(response.message);
      },
      (error: any) => {
        this.toast.error(error.message);
      }
    );
  }
}
