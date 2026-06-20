import { Component } from '@angular/core';
import { profile } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly profile = profile;
  readonly year = new Date().getFullYear();
}
