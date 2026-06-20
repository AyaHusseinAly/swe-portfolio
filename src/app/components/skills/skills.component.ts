import { Component } from '@angular/core';
import { skillCategories, skills } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly skills = skills;
  readonly categories = skillCategories;

  skillsByCategory(category: (typeof skillCategories)[number]) {
    return this.skills.filter((skill) => skill.category === category);
  }
}
