import { Education } from './education.model';
import { PersonalData } from './persoanlData.model';
import { ProfessionalExperience } from './professional-experience.models';
import { Project } from './project.model';
import { Courses } from './courses.model';

export interface Curriculum {
  personalData: PersonalData[];
  summary: string;
  skills: string[];
  education: Education[];
  experiences: ProfessionalExperience[];
  projects: Project[];
  languages: string[];
  courses: Courses[];
}
