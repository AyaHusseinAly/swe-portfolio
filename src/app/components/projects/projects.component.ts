import { Component, signal } from '@angular/core';
import { projects } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects = projects;
  readonly activeFilter = signal('All');

  readonly filters = ['All', ...new Set(projects.flatMap((p) => p.tech))];

  filteredProjects() {
    const filter = this.activeFilter();
    if (filter === 'All') return this.projects;
    return this.projects.filter((p) => p.tech.includes(filter));
  }

  setFilter(filter: string): void {
    this.activeFilter.set(filter);
  }
}
