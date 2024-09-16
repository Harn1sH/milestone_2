import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  username = "";
  password = "";
  error = false

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleLogin(formData: NgForm) {
    const{userName,password} = formData.form.value
    
    if (userName === "qwerty" && password === "qwerty") {
      this.router.navigate(["home"]);
    }
    else {
      this.error = true
    }
  }
}
