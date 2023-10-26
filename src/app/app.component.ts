import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projetoFinal';
  curriculum: any = {
    personalInfo: {
      name: 'João Silva',
      position: 'Front-End Developer',
      location: 'São Paulo, Brazil',
      phone: '+55 11 1234-5678',
      email: 'joao.silva@example.com',
      linkedin: 'linkedin.com/in/joaosilva',
      github: 'github.com/joaosilva',
    },
    summary:
      'I am a front-end developer passionate about creating amazing user experiences.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js'],
    education: [
      {
        degree: 'Bachelor in Computer Science',
        institution: 'XYZ University',
        startDate: '2018',
        endDate: '2022',
      },
    ],
    experiences: [
      {
        position: 'Junior Front-End Developer',
        specialty: 'Responsive Web Design',
        startDate: '2022',
        endDate: 'Present',
        description:
          'Working on front-end development projects, focusing on creating responsive layouts.',
      },
      {
        position: 'Web Development Intern',
        specialty: 'UI/UX Design',
        startDate: '2021',
        endDate: '2022',
        description:
          'Assisted in creating intuitive and attractive user interfaces.',
      },
    ],
    projects: [
      {
        title: 'Personal Portfolio Website',
        endDate: '2022',
        description:
          'Development of a personal portfolio website to showcase projects and skills.',
        link: 'joaosilva.com',
      },
      {
        title: 'Responsive Web App',
        endDate: '2021',
        description:
          'Development of a responsive web app for a technology startup.',
        link: 'appstartup.com',
      },
    ],
    languages: ['Portuguese', 'English'],
  };

  // {
  //   dadosPessoais: {
  //     nome: '',
  //     cargo: 'Desenvolverdor Front-End',
  //     local: '',
  //     telefone: '',
  //     email: '',
  //     linkedin: '',
  //     github: '',
  //   },
  //   resumo: '',
  //   habilidades: [],
  //   formacao: [
  //     { formacao: '', instituicao: '', dataInicio: '', dataTermino: '' },
  //   ],
  //   experiencia: [
  //     {
  //       cargo: '',
  //       especialidade: '',
  //       dataInicio: '',
  //       dataTermino: '',
  //       descricao: '',
  //     },
  //     {
  //       cargo: '',
  //       especialidade: '',
  //       dataInicio: '',
  //       dataTermino: '',
  //       descricao: '',
  //     },
  //     {
  //       cargo: '',
  //       especialidade: '',
  //       dataInicio: '',
  //       dataTermino: '',
  //       descricao: '',
  //     },
  //   ],
  //   projetos: [
  //     { titulo: '', dataTermino: '', descricao: '', link: '' },
  //     { titulo: '', dataTermino: '', descricao: '', link: '' },
  //   ],
  //   idiomas: [],
  // };
}
