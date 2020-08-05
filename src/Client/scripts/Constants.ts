
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
      homeContents: {
         homeImgSrc1: '/Media/Home/homeImage1.jpg',
         homeImgSrc2: '/Media/Home/homeImage2.png',
         homeContentTitle1: 'ABOUT ME',
         homeContentTitle2: 'PROJECTS'
      },
      aboutMeContents: {
         profileCard: {
            title: 'Jason Lee',
            subtitle: [
               'Software Engineer',
               'University of Michigan B.S in Computer Science'
            ],
            profileImgSrc: '/Media/AboutMe/profile.jpg',
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
               subHeader: ['August, 2020' , 'Collaborated with Jade Kim'],
               cardContent: [
                  'A single page web app adaptable for future build-ups that uses react-router to dynamically change contents',
                  'Styled with Material-UI and custom CSS including flexible grid to support cross-browser compatibility',
                  'Improved maintainability and adaptability by modularizing components and separating out static data'
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
                  'Leveraged the concept of transaction logging used in operating systems to provide isolation in collision detection, delivering a solution for hit damage bug and an inconsistency in switching turn',
                  'Compatible with React web applications'
               ]
            },
            {
               type: 'video',
               src: '/Media/Projects/bandTogether.mp4',
               videoOptions : {
                  autoPlay: false,
                  loop: false,
                  controls: true
               },
               header: 'Band Together',
               subHeader: ['January - May, 2020' , 'Collaborated with Ben Lee, Saad Monem, Brendan Duff, Viknesh Alagappan'],
               cardContent: [
                  'Android app matching musicians based on location, time, and resources(instruments)',
                  'Prioritized search results by using user-based collaborative filtering',
                  'Preset filter interface for faster search results'
               ]
            },
            {
               type: 'video',
               src: '/Media/Projects/searchEngine.mp4',
               videoOptions : {
                  autoPlay: false,
                  loop: false,
                  controls: true
               },
               header: 'Wiki - Search Engine Project',
               subHeader: ['December, 2019' , 'Collaborated with Rishi Patel, Alex Rai'],
               cardContent: [
                  'Wiki search engine thtat ranks search results based on "Term Frequency - Inverse Document Frequent" and PageRank scores',
                  'Uses a user-driven search weight interface for an additional filtering option',
                  'Designed a four-stage MapReduce pipeline to calculate the inverted index - Saved memory by storing over 30MB input into a data structure'
               ]
            }
         ]
      }
   }
};

export default Object.freeze(constants);
