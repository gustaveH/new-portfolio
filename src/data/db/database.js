import Mock from "../mock";

const database = {
  information: {
    name: 'Gustave Habimana',
    aboutContent: "I am a Software Developer with a passion for creating friendly and responsive applications. Take a look around my page and some of my amazing and fun work. Also feel free to connect with me. ",
    phone: '',
    nationality: 'Rwandan',
    language: 'English, Kinyarwanda, Kiswahili',
    email: '',
    address: 'Atlanta, GA',
    freelanceStatus: 'Available',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/gustave-habimana/',
      github: 'https://github.com/gustaveH',
      medium: 'https://medium.com/@habimana',
      pinterest: '',
      behance: '',
      dribbble: '',
      
    },
    brandImage: '/images/profile.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image.jpg',
    cvfile: '/files/gustave_resume.pdf'
  },
  services: [
    {
      title: "Web Development",
      icon: 'code',
      details: "I design, develop, and deploy responsive web apps while making sure they meet user needs. I also maintain existing applications"
    },
    {
      title: "Cloud Computing",
      icon: 'aws',
      details: "Storage is important anywhere, anytime. Using AWS endless services, I can optimize apps while making them scalable to any work needed."
    },
    {
      title: "Each one Teach One",
      icon: 'book',
      details: "Leaning new technology is hard. I make an effort to help those that are trying to get into technology by providing them tools based on their goals."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      
    },
    {
      title: "CSS3",
      
    },
    {
      title: "Javascript",
      
    },
    {
      title: "ReactJS",
      
    },
    {
      title: "AWS",
      
    },
    {
      title: "SQL",
      
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/denwize.jpg",
      url: 'https://denwize.com'
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/lesmageza.jpg",
      url: 'https://lesmageza.com'
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/kezaqueens.jpg",
      url: 'https://kezaqueens.netlify.app'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "05-2021 - Present",
        position: "End User Support",
        company: "ETRADE",
        details: "Identifies and resolves incidents/requests and logs all interactions. Evaluates and resolves work orders and requests regarding use of application software or hardware. Creates and configures user accounts in Active Directory for new users and disabling old accounts when needed. Manages user accounts, security and distribution groups as needed for users. Grants permissions and configures hardware for new employees as part of onboarding process. Installs, modifies and repairs software and hardware to resolve technical issues."
      },
      {
        id: 2,
        year: "05-2019 - 04-2021",
        position: "Junior Web Developer",
        company: "Denwize LLC",
        details: "Built application using JavaScript DOM for better UI and used CSS3 for styling. Developed and maintained React components of application. Implemented JSX, and DOM for content rendering, and handling user Events. Implemented Axios Asynchrony RESTful API for data request while maintaining application functionality Utilizes GitHub for source code management and for version control. Implements React lifecycles for better user interaction, and app rendering. Operated with tools like NPM, source control Git, and Visual Studio for deploying and editing codes, and bug fixing. Deployed applications using Netlify and AWS Amplify for CI/CD"
      },
      {
        id: 3,
        year: "09-2014 - 01-2020",
        position: "Customer Relations Manager",
        company: "Penske Automotive",
        details: "Communicated effectively as liaison between clients and other department employees. Developed solutions for service automating by analyzing, and addressing client's problems. Created healthy fast-paced, and agile environment through team building activities and training"
      }
    ],
    educationExperience: [
      {
        id: 2,
        year: "2010 - 2016",
        graduation: "B.A: Political Science",
        university: "Georgia Gwinnett College",
      },
    ]
  },
  
  contactInfo: {
    phoneNumbers: ['+012-3456-7891', '+012-3456-7892'],
    emailAddress: ['admin.sitename@example.com', 'info.sitename@example.com'],
    address: "121 King Street, Melbourne, Victoria 3000, Australia"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});