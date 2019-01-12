import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../common/forms.css']
})
export class SignupComponent implements OnInit {

    form:FormGroup;

    constructor(private fb: FormBuilder, private authService:  AuthService) {

        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['' ,Validators.required],
            confirm: ['', Validators.required]
        });


    }

    ngOnInit() {

    }


    signUp() {
        const val = this.form.value;
        if (this.form.valid) {
           this.authService.signUp(val.email, val.password)
           .subscribe(
               () => console.log('User creates successfully'),
                console.error
           );
        }     
    }

}
