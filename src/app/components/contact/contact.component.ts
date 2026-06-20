import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { profile } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly profile = profile;

  name = '';
  email = '';
  message = '';
  readonly submitted = signal(false);

  onSubmit(): void {
    if (!this.name || !this.email || !this.message) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${this.name}`);
    const body = encodeURIComponent(
      `Name: ${this.name}\nEmail: ${this.email}\n\n${this.message}`,
    );
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
    this.submitted.set(true);
  }
}
