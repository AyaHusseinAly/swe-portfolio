import { Component } from '@angular/core';
import { profile, stats } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly profile = profile;
  readonly stats = stats;
}
