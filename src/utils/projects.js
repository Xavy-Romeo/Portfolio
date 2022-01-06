import TheXavyShop from '../assets/images/the-xavy-shop.png';
// import HowRU from '../assets/images/howru.png';
import RunBuddy from '../assets/images/run-buddy.png';
import Target from '../assets/images/target.png';
import IntelliRisk from '../assets/images/intellirisk.png';

const projects = [
    {
        name: 'The Xavy Shop', 
        type: 'E-commerce Application', 
        languages: 'React, Material-UI, MongoDB, Express, JavaScript, NodeJS, HTML, CSS, GraphQL', 
        image: TheXavyShop,
        description: `An E-Commerce application where you can purchase your favorite sporting goods. Uses a react front end, 
            styled by Material-UI and receives data from a GraphQL api. Global state is managed through react’s context api and 
            local state is managed using react hooks. Payment processing is powered by the Stipe api.`,
        site: 'https://the-xavy-shop.herokuapp.com/',
        github: 'https://github.com/Xavy-Romeo/the-xavy-shop'
    },
    {
        name: 'IntelliRisk', 
        type: 'IntelliRisk Landing Page', 
        languages: 'HTML, CSS', 
        image: IntelliRisk,
        description: `Manage your risk all in one app. A landing page for IntelliRisk.`,
        site: 'https://xavy-romeo.github.io/intellirisk/',
        github: 'https://github.com/Xavy-Romeo/intellirisk'
    },
    {
        name: 'Run Buddy', 
        type: 'Run Buddy Landing Page', 
        languages: 'HTML, CSS', 
        image: RunBuddy,
        description: `A landing page for Run Buddy. Find trainers near you to help you get the physique you want.`,
        site: 'https://xavy-romeo.github.io/run-buddy/',
        github: 'https://github.com/Xavy-Romeo/run-buddy'
    },
    {
        name: 'Target Email',
        type: 'Promotional Email',
        languages: 'HTML, Sass, Foundation, Panini, Inky',
        image: Target,
        description:'A promotional email for Target.',
        site: 'https://xavy-romeo.github.io/target-promotional-email/',
        github: 'https://github.com/Xavy-Romeo/target-promotional-email'
    }
];

export default projects;