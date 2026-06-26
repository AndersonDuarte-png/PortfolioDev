export type Language = 'pt' | 'en'

export const translations = {
  pt: {
    buttonLabel: 'EN',


    hero: {
      name: 'Anderson Duarte',
      role: 'Desenvolvedor de Software',
      description:
        'Desenvolvedor com foco em soluções corporativas, atuando com Pega Systems, APIs, banco de dados, automação de processos e IA aplicada ao desenvolvimento.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },

    about: {
      title: 'Sobre mim',
      paragraphs: [
        'Sou desenvolvedor com experiência na criação de soluções corporativas utilizando plataformas low-code, workflows, APIs, banco de dados e automação de processos.',
        'Tenho atuação com Pega Systems no desenvolvimento e manutenção de aplicações empresariais, trabalhando com regras de negócio, fluxos operacionais, correções, melhorias evolutivas e integração entre sistemas.',
      ],
    },

    areas: {
      title: 'Áreas de atuação',
      cards: [
        {
          title: 'Pega Systems',
          description:
            'Desenvolvimento de workflows, regras de negócio e soluções corporativas utilizando Pega Systems.',
        },
        {
          title: 'APIs e integrações',
          description:
            'Criação e manutenção de APIs e integrações entre sistemas corporativos.',
        },
        {
          title: 'Banco de dados',
          description:
            'Apoio em soluções que envolvem persistência, consulta e organização de dados.',
        },
        {
          title: 'IA aplicada ao desenvolvimento',
          description:
            'Uso de IA e engenharia de prompt para documentação, análise de problemas e produtividade técnica.',
        },
      ],
    },

    experience: {
      title: 'Experiência profissional',
      items: [
        {
          company: 'Capgemini',
          role: 'Desenvolvedor Sênior',
          period: 'Dez/2025 – Atual',
          activities: [
            'Desenvolvimento e manutenção de soluções corporativas utilizando Pega Systems.',
            'Implementação de workflows, regras de negócio e melhorias em processos internos.',
            'Criação e manutenção de integrações entre sistemas e APIs.',
            'Análise e correção de bugs, atuando na evolução contínua da aplicação.',
          ],
        },
        {
          company: 'BRQ',
          role: 'Desenvolvedor Júnior',
          period: 'Set/2024 – Dez/2025',
          activities: [
            'Desenvolvimento de aplicações corporativas na plataforma Pega Systems.',
            'Criação e manutenção de workflows, regras de negócio e componentes reutilizáveis.',
            'Desenvolvimento de funcionalidades de back-end e front-end dentro da plataforma.',
            'Atuação em correções, melhorias evolutivas e suporte técnico à aplicação.',
          ],
        },
        {
          company: 'EY',
          role: 'Trainee FSO Consulting – SDC',
          period: 'Jan/2023 – Set/2024',
          activities: [
            'Atuação em projetos corporativos utilizando Pega Systems.',
            'Desenvolvimento de workflows, processos e regras de negócio.',
            'Apoio na construção de funcionalidades de front-end e back-end na plataforma.',
            'Análise e resolução de bugs em ambiente corporativo.',
          ],
        },
        {
          company: 'Banco Carrefour',
          role: 'Estagiário de Auditoria',
          period: 'Mar/2021 – Dez/2022',
          activities: [
            'Desenvolvimento de automações para auditoria e segurança da informação.',
            'Criação de indicadores para monitoramento contínuo de controles internos.',
            'Desenvolvimento de scripts utilizando Python e Shell Script.',
            'Geração de relatórios automatizados com Power BI.',
          ],
        },
      ],
    },

    projects: {
      title: 'Projetos',
      description:
        'Alguns projetos são próprios e possuem código disponível. Projetos corporativos com Pega Systems são descritos de forma conceitual por questões de confidencialidade.',
      linkLabel: 'GitHub',
      cards: [
        {
          title: 'DevRadar',
          description:
            'Projeto em Python que utiliza a API do Gemini para consultar e analisar estatísticas de desenvolvimento, explorando IA generativa aplicada à produtividade e análise técnica.',
          url: 'https://github.com/AndersonDuarte-png/IA/tree/main/DevRadar',
        },
        {
          title: 'Tradutor de Tela',
          description:
            'Aplicação em Python criada para auxiliar na tradução de conteúdos exibidos na tela, com foco em produtividade, automação e uso diário de ferramentas digitais.',
          url: 'https://github.com/AndersonDuarte-png/Tradutor-de-tela',
        },
        {
          title: 'Loan Simulation API',
          description:
            'API para simulação de empréstimos utilizando regras de negócio, cálculo de parcelas, validações e estrutura backend com Python.',
          url: '#',
        },
        {
          title: 'Projetos corporativos com Pega Systems',
          description:
            'Atuação em aplicações empresariais envolvendo workflows, regras de negócio, integrações, APIs, correções e melhorias evolutivas.',
          url: '',
        },
      ],
    },

    contact: {
      title: 'Contato',
      description:
        'Disponível para oportunidades relacionadas a desenvolvimento de software, soluções corporativas, automação de processos e aplicações com Pega Systems.',
      email: 'E-mail',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },


  },

  en: {
    buttonLabel: 'PT',


    hero: {
      name: 'Anderson Duarte',
      role: 'Software Developer',
      description:
        'Software developer focused on enterprise solutions, working with Pega Systems, APIs, databases, process automation, and AI applied to software development.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },

    about: {
      title: 'About me',
      paragraphs: [
        'I am a software developer with experience building enterprise solutions using low-code platforms, workflows, APIs, databases, and process automation.',
        'I work with Pega Systems in the development and maintenance of enterprise applications, including business rules, operational workflows, bug fixes, continuous improvements, and system integrations.',
      ],
    },

    areas: {
      title: 'Areas of expertise',
      cards: [
        {
          title: 'Pega Systems',
          description:
            'Development of workflows, business rules, and enterprise solutions using Pega Systems.',
        },
        {
          title: 'APIs and integrations',
          description:
            'Development and maintenance of APIs and integrations between enterprise systems.',
        },
        {
          title: 'Databases',
          description:
            'Support for solutions involving data persistence, queries, and data organization.',
        },
        {
          title: 'AI applied to development',
          description:
            'Use of AI and prompt engineering for documentation, problem analysis, and technical productivity.',
        },
      ],
    },

    experience: {
      title: 'Professional experience',
      items: [
        {
          company: 'Capgemini',
          role: 'Senior Developer',
          period: 'Dec/2025 – Present',
          activities: [
            'Development and maintenance of enterprise solutions using Pega Systems.',
            'Implementation of workflows, business rules, and improvements to internal processes.',
            'Creation and maintenance of system integrations and APIs.',
            'Bug analysis and fixes, contributing to the continuous evolution of the application.',
          ],
        },
        {
          company: 'BRQ',
          role: 'Junior Developer',
          period: 'Sep/2024 – Dec/2025',
          activities: [
            'Development of enterprise applications using Pega Systems.',
            'Creation and maintenance of workflows, business rules, and reusable components.',
            'Development of back-end and front-end features within the platform.',
            'Work on bug fixes, continuous improvements, and technical support for the application.',
          ],
        },
        {
          company: 'EY',
          role: 'FSO Consulting Trainee – SDC',
          period: 'Jan/2023 – Sep/2024',
          activities: [
            'Work on enterprise projects using Pega Systems.',
            'Development of workflows, processes, and business rules.',
            'Support in building front-end and back-end features within the platform.',
            'Analysis and resolution of bugs in enterprise applications.',
          ],
        },
        {
          company: 'Banco Carrefour',
          role: 'Audit Intern',
          period: 'Mar/2021 – Dec/2022',
          activities: [
            'Development of automation solutions for audit and information security.',
            'Creation of indicators for continuous monitoring of internal controls.',
            'Development of scripts using Python and Shell Script.',
            'Generation of automated reports using Power BI.',
          ],
        },
      ],
    },

    projects: {
      title: 'Projects',
      description:
        'Some projects are personal projects with available source code. Corporate Pega Systems projects are described at a high level due to confidentiality.',
      linkLabel: 'GitHub',
      cards: [
        {
          title: 'DevRadar',
          description:
            'Python project that uses the Gemini API to query and analyze development statistics, exploring generative AI applied to productivity and technical analysis.',
          url: 'https://github.com/AndersonDuarte-png/IA/tree/main/DevRadar',
        },
        {
          title: 'Screen Translator',
          description:
            'Python application designed to help translate on-screen content, focused on productivity, automation, and day-to-day use of digital tools.',
          url: 'https://github.com/AndersonDuarte-png/Tradutor-de-tela',
        },
        {
          title: 'Loan Simulation API',
          description:
            'API for loan simulation using business rules, installment calculations, validations, and a Python backend structure.',
          url: '#',
        },
        {
          title: 'Corporate projects with Pega Systems',
          description:
            'Experience with enterprise applications involving workflows, business rules, integrations, APIs, bug fixes, and continuous improvements.',
          url: '',
        },
      ],
    },

    contact: {
      title: 'Contact',
      description:
        'Available for opportunities related to software development, enterprise solutions, process automation, and applications with Pega Systems.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },


  },
}
