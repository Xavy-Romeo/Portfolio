import TheXavyShop from '../assets/images/the-xavy-shop.png';
import HowRU from '../assets/images/howru.png';
import RunBuddy from '../assets/images/run-buddy.png';

const projects = [
    {
        name: 'The Xavy Shop', 
        type: 'E-commerce Application', 
        languages: 'React, Material-UI, MongoDB, Express, JavaScript, NodeJS, HTML, CSS, GraphQL', 
        image: TheXavyShop,
        description: `An E-Commerce application where you can purchase your favorite sporting goods. Uses a react front end, 
            styled by Material-UI and receives data from a GraphQL api. Global state is managed through react’s context api and 
            local state is managed using react hooks. Payment processing is powered by the Stipe api.`
    },
    {
        name: 'HowRU', 
        type: 'Mental Health Application', 
        languages: 'React, Material-UI, MongoDB, Express, JavaScript, AJAX, HTML, CSS, NodeJS', 
        image: HowRU
    },
    {
        name: 'Run Buddy', 
        type: 'Run Buddy Landing Page', 
        languages: 'HTML, CSS', 
        image: RunBuddy
    }
];

export default projects;