import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projetoFinal';
  curriculum: any = {
    personalData: {
      name: 'João Silva',
      position: 'Front-End Developer',
      location: 'São Paulo, Brazil',
      phone: '+55 11 1234-5678',
      email: 'joao.silva@example.com',
      linkedin: 'linkedin.com/in/joaosilva',
      github: 'github.com/joaosilva',
    },
    summary:
      'Sou um desenvolvedor front-end apaixonado por criar experiências de usuário incríveis.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js'],
    education: [
      {
        degree: 'Bacharel em Ciência da Computação',
        institution: 'Universidade XYZ',
        startDate: '2018',
        endDate: '2022',
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
        link: 'joaosilva.com',
      },
      {
        title: 'Aplicativo Web Responsivo',
        endDate: '2021-02',
        description:
          'Desenvolvimento de um aplicativo web responsivo para uma startup de tecnologia.',
        link: 'appstartup.com',
      },
    ],
    languages: ['Português', 'Inglês'],
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
