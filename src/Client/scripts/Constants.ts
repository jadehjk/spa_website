
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
                  text: 'he started programming after his internship at a blockchain Startup called "Edenchain"' 
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
                  'Loads only a single page and router dynamically changes contents',
                  'Styled with MaterialUI and custom CSS including flexble grid with cross-browser compatibility',
                  'Easy to update information by changing contents in Constants file'
               ]
            },
            {
               type: 'video',
               src: '/Media/Projects/JadeVSJason.mp4',
               videoOptions : {
                  autoPlay: true,
                  loop: true,
                  controls: false
               },
               header: 'Jade VS Jason',
               subHeader: ['May, 2020' , 'Collaborated with Jade Kim'],
               cardContent: [
                  'Cannonball shooting game built on top of physics engine Matter.js',
                  `Leveraged "Operating System's transaction logging" idea to provide isolation in collision detection`,
                  'Dockable to React web applications'
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
                  'Android app providing a solution to musician matching system where location, correct resources(instruments), and ephemerality create difficulty',
                  'Prioritized search results by using user-based collaborative filtering',
                  'Preset filter interface for  and faster search results'
               ]
            },
            {
               type: 'video',
               src: '/Media/Projects/searchEngine.mp4',
               videoOptions : {
                  autoPlay: true,
                  loop: true,
                  controls: false
               },
               header: 'Wiki - Search Engine Project',
               subHeader: ['December, 2019' , 'Collaborated with Rishi Patel, Alex Rai'],
               cardContent: [
                  'Wiki search engine thtat ranks search results based on "Term Frequency - Inverse Document Frequent" and PageRank scores',
                  'Designed four-stage MapReduce pipeline to efficiently calculate inverted index by saving memory from storing over 30MB input into a data structure',
                  ' Uses user-driven search weight interface for an additional filtering option'
               ]
            }
         ]
      }
   }
};

export default Object.freeze(constants);
