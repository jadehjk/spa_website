
const constants = {
   routes: {
      home: '/',
      aboutMe: '/aboutme',
      projects: '/projects'
   },
   strings: {
      appbarTitle: 'Jade Kim'
   },
   links: {
      github: 'https://github.com/jadehjk/',
      linkedIn: 'https://www.linkedin.com/in/jadekim6565'
   },
   email: 'hiimhajoo@gmail.com',
   contents:{
      homeContents: {
         homeImgSrc1: '/Media/Home/homeImage1.jpg',
         homeImgSrc2: '/Media/Home/homeImage2.png',
         homeContentTitle1: 'ABOUT ME',
         homeContentTitle2: 'PROJECTS'
      },
      aboutMeContents: {
         profileCard: {
            title: 'Jade Kim',
            subtitle: [
               'Software Engineer',
               'University of Michigan B.S in Computer Science'
            ],
            profileImgSrc: '/Media/AboutMe/profile.jpg',
            bodyContents: [
               'Software Engineer II at Clinc (2019 - Present)',
               'B.S in Computer Science at University of Michigan - Ann Arbor (2018)',
               'Software Engineer Intern at Clinc (2018)',
               'Research Intern at ATTO Research (2016)',
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
                  text: 'He was 23 when he first started programming after his internship at a blockchain Startup called "Edenchain"' 
               },
            ]
         }
      },
      projectsContents: {
         //type either 'image' or 'video', video file's src is public dir
         projectCards: [
            {
               type: 'image',
               src: '/Media/Projects/spaWebsiteImg.png',
               videoOptions : {
                  autoPlay: false,
                  loop: false,
                  controls: false
               },
               header: 'SPA Personal Website',
               subHeader: ['August, 2020' , 'Collaborated with Jason Lee'],
               cardContent: [
                  'Loads a single page and uses react-router to dynamically change contents',
                  'Styled with MaterialUI and custom CSS including flexble grid to support cross-browser compatibility',
                  'Easy to update and manage information by updating a single Constants file'
               ]
            },
            {
               type: 'video',
               src: '/Media/Projects/JadeVSJason.mp4',
               videoOptions : {
                  autoPlay: false,
                  loop: false,
                  controls: true
               },
               header: 'Jade VS Jason',
               subHeader: ['May, 2020' , 'Collaborated with Jade Kim'],
               cardContent: [
                  'Cannonball shooting game built on top of the physics engine Matter.js',
                  `Leveraged "Operating System's transaction logging" idea to provide isolation in collision detection`,
                  'Compatible with React web applications'
               ]
            }
         ]
      }
   }
};

export default Object.freeze(constants);
