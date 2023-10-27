import { Input, Component } from '@angular/core';
import { PersonalData } from 'src/app/models/persoanlData.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() public personalData?: PersonalData[];

}
