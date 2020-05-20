import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private angularFire: AngularFireAuth) { }

  title: string;
  formLogin: FormGroup;
  formCreate: FormGroup;
  mostraLogin = true;
  email: any;
  password: any;

  ngOnInit() {
    this.formulario();
  }

  formulario() {

    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })


    this.formCreate = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {
    console.log(this.formLogin.getRawValue());
    this.email = this.formLogin.get('email').value;
    this.password = this.formLogin.get('password').value;
    // LOGAR COM FIREBASE
    this.angularFire.signInWithEmailAndPassword(this.email, this.password).then((res) => {
      console.log(res);
    }, (error) => {
      console.log(error)
    })
  }
  formCadastrar() {
    this.formLogin.reset(); // limpa o formulario caso queria cadastrar
    this.mostraLogin = false; // oculta o form login

  }
  RenderformLogin() {
    this.formCreate.reset(); // limpa o formulario caso queria cadastrar
    this.mostraLogin = true; // oculta o form login
  }
  cadastrar() {
    this.email = this.formLogin.get('email').value;
    this.password = this.formLogin.get('password').value;
    this.angularFire.createUserWithEmailAndPassword(this.email, this.password).then((res) => {
      console.log(res);
    }, (error) => {
      console.log(error);
    })

  }

  returnLogin() {
    this.mostraLogin = true;
  }

}
