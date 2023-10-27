import { Component } from '@angular/core';
import { Curriculum } from './models/curriculum.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projetoFinal';
  curriculum: Curriculum = {
    personalData: [{
      name: 'João Silva',
      position: 'Front-End Developer',
      location: 'São Paulo, Brazil',
      phone: '+55 11 1234-5678',
      email: 'joao.silva@example.com',
      linkedin: 'linkedin.com/in/joaosilva',
      github: 'github.com/joaosilva',
    }],
    summary:
      'Sou um Desenvolvedor Web apaixonado por criar experiências digitais inovadoras e funcionais. Meu foco está em unir estética e usabilidade para elevar o padrão das interfaces de usuário. Busco constantemente a excelência e estou comprometido em criar soluções de alta qualidade que cativem os usuários.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js'],
    education: [
      {
        degree: 'Bacharel em Ciência da Computação',
        institution: 'Universidade XYZ',
        startDate: '2018-07',
        endDate: '2022-07',
      },
    ],
    experiences: [
      {
        position: 'Desenvolvedor Front-End Júnior',
        specialty: 'Web Design Responsivo',
        startDate: '2022-05',
        endDate: 'Atual',
        description:
          'Trabalho em projetos de desenvolvimento front-end, focando na criação de layouts responsivos.',
      },
      {
        position: 'Estagiário de Desenvolvimento Web',
        specialty: 'UI/UX Design',
        startDate: '2021-01',
        endDate: '2022-04',
        description:
          'Auxiliei na criação de interfaces de usuário intuitivas e atraentes.',
      },
    ],
    projects: [
      {
        title: 'Website de Portfólio Pessoal',
        endDate: '2022-06',
        description:
          'Desenvolvimento de um site de portfólio pessoal para exibir projetos e habilidades.',
        link: 'https://joaosilva.com',
      },
      {
        title: 'Aplicativo Web Responsivo',
        endDate: '2021-02',
        description:
          'Desenvolvimento de um aplicativo web responsivo para uma startup de tecnologia.',
        link: 'https://appstartup.com',
      },
    ],
    languages: ['Português', 'Inglês'],
    courses: [
      {
      title: 'Desenvolvimento Front-end',
      instituition: 'Ada Tech',
      workload: 100,
      desciption: 'Habilidades avançadas em desenvolvimento Front-End com Angular, incluindo criação de componentes dinâmicos, roteamento e ligação de dados para aplicações web interativas e responsivas.',
      },
  ],
  };
}
