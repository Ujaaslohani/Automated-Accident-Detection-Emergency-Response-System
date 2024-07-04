import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  `,
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent]
})
export class AppComponent { }
