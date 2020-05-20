import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

      constructor(private formBuilder : FormBuilder) {}

  title: string;
  formLogin: FormGroup;
  mostraLogin = true;

  ngOnInit() {
      this.formulario();
  }

  formulario(){

       this.formLogin = this.formBuilder.group({
          email : ['', Validators.required],
          password: ['',Validators.required]
      })

  }
  login(){
    console.log(this.formLogin.getRawValue());
    // LOGAR COM FIREBASE
    
  }
  cadastrar() {
    this.mostraLogin = false;
  }
  returnLogin() {
    this.mostraLogin = true;
  }

}
