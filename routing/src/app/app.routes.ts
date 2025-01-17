import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';


export const routes: Routes = [
  {
    path: "",
    title: 'Home Page',
    component: HomepageComponent,
  },
  {
    path: "services",
    title: 'Service Page',
    component: ServicesComponent,
  },
  {
    path: "about",
    title: 'About Page',
    component: AboutComponent,
  },
  {
    path: "contact",
    title: 'Contact Page',
    component: ContactComponent,
  }
];
