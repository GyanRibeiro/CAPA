import { Component, Input } from '@angular/core';
import { Courses } from 'src/app/models/courses.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  @Input() courses?: Courses[]
}
