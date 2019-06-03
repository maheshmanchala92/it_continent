import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { AuthenticationComponent } from './authentication.component';

const authRoutes: Routes = [
  {
      path: '',
      component: AuthenticationComponent,
      children: [
          {
              path: '',
              children: [
                  { path: '', component: SigninComponent }
              ]
          }
      ]
  }
 
]
@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  exports:[RouterModule]
})
export class AuthenticationRoutingModule { }
