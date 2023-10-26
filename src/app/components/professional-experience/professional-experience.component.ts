import { Component, Input } from '@angular/core';
import { ProfessionalExperience } from 'src/app/models/professional-experience.models';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss'],
})
export class ProfessionalExperienceComponent {
  @Input() public experiences?: ProfessionalExperience[];
}
