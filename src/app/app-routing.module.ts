import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyStudiesComponent } from './my-studies/my-studies.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'studies', component: MyStudiesComponent },
  { path: 'contact', component: ContactMeComponent },
  { path: 'abautme', component: AboutMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
