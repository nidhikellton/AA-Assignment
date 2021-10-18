import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'register'

  },
  { path: 'register', component: RegistrationComponent },
  { path: 'anagram', component: Question2Component },
  { path: 'temp', component: Question3Component },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
