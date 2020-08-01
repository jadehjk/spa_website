
const constants = {
   routes: {
      home: '/',
      aboutMe: '/aboutme',
      projects: '/projects'
   },
   strings: {
      appbarTitle: 'Jason Lee'
   },
   links: {
      github: 'https://github.com/EunPyoLee/',
      linkedIn: 'https://www.linkedin.com/in/eun-pyo-jason-lee-86466214b/'
   },
   email: 'eunpyolee0420@gmail.com',
   contents:{
      aboutMeContents:{
         profileCard:{
            title: 'Jason Lee',
            subtitle: [
               'Software Engineer',
               'University of Michigan B.S in Computer Science'
            ],
            bodyContents: [
               'Summer Software Engineer Intern at Lingco Language Labs (2020)',
               ' Hacker Fellows 2020 Intern (2020)',
               'Ambassador at Edenchain (2018-2019)',
               'Summer Business Development Team Intern at Edenchain (2018)',
               'Sergeant Chief Auxiliary Police at Republic of Korea Auxiliary Police(2016-2018)',
               'B.S in Computer Science at University of Michigan - Ann Arbor (Class of 2020)'
            ],
            // Use only 4 cards
            keynumberCards: [
               {
                  keyNumber: '2',
                  text: 'Years to finish his Computer Science degree at University of Michigan - Ann Arbor' 
               },
               {
                  keyNumber: '637',
                  text: 'Days of military service as a Korea Auxilary Police. He received two decorations during the service' 
               },
               {
                  keyNumber: '5',
                  text: 'Hours a day spent practicing programming; he practices 2-5 hours during school or work days' 
               },
               {
                  keyNumber: '23',
                  text: 'he started programming after his internship at a blockchain Startup called "Edenchain"' 
               },
            ]
         }
      }
   }
};

export default Object.freeze(constants);
