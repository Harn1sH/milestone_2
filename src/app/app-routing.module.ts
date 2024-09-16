import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
import { HomeComponent } from "./home/home.component";
import { AddComponent } from "./add/add.component";

const routes: Routes = [
  { path: "login", component: LoginPageComponent },
  { path: "home", component: HomeComponent },
  { path: "", component: LoginPageComponent },
  {path:'add',component:AddComponent},
  { path: "**", component: LoginPageComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
