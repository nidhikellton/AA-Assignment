import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnagramComponent } from './anagram/anagram.component';
import { RegistrationComponent } from './registration/registration.component';
import { TempTrackerComponent } from './temp-tracker/temp-tracker.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'register'

  },
  { path: 'register', component: RegistrationComponent },
  { path: 'anagram', component: AnagramComponent },
  { path: 'temp', component: TempTrackerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
