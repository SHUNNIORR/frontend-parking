import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { LoginUserResponse } from '../models/login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private authService: AuthService,  private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe({
      next:(res:LoginUserResponse)=>{
        this.authService.saveTokenToLocal(res.token);
        this.router.navigate(['/home']);
      },
      error: (err:any) => {
        if(err.status === 401) {
          alert('Credenciales no válidas, por favor verifíquelas');
        }else{
          alert('Hubo un error:'+err.error.message);
        }
      } });

  }
}
