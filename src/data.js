//todo: ID FOR EACH PROJECT
import countriesPoster from './assets/images/countries-poster.jpg'
import advicePoster from './assets/images/advice-app.poster.jpg'
import shortlyPoster from './assets/images/shortly-poster.png'
import quizzicalPoster from './assets/images/quizzical-poster.png'
import formPoster from './assets/images/form-poster.jpg'
import moviesSearcherPoster from './assets/images/Screenshot_20230603-110910.jpg'

export default [

    {
        name: 'Advice Generator',
        description: "The core functionality of the application involved fetching random advice from an API and displaying it to the user. This project may look simple but I've learned good things building it. API calling and problem-solving. The problem I faced here was that if users tried to quickly get a new advice the API returned the same advice repeatedly causing a bad user experience. To solve this problem I implemented Recursion. The APP calls an API fetching an advice to display. I save that advice locally. then, if user wants a new advice the APP fetches it but before render it, It compares the previous advice with the new one. if they are identical It recursively call the fetch function again fetching for a different advice to display",
        poster: advicePoster,
        type: 'basic',
        site: 'https://advice-generator-orlando.netlify.app/',
        repository: 'https://github.com/OrlandoLeyva/Advice-generator'
    },

    {

        name: 'Countries App',
        description: 'The functionality of this projects is fetching countries data and display it to user. Users can click on any country and get detailed info about them and navigate to border countries. additionally, a back button that enables user to move back to the previous country or to the initial list of counties. the APP implements a search-bar for users to search for any country they want and finally a filter bar to filter countries by region ',
        poster: countriesPoster,
        type: 'basic',
        site: 'https://the-countries.netlify.app/',
        repository: 'https://github.com/OrlandoLeyva/rest-countries-api'
    },

    {
        name: 'Shortly URL APP',
        description: 'The application allows users to input a long URL and receive a shortened version that they can easily share',
        poster: shortlyPoster,
        type: 'basic',
        site: 'https://shortly-orlando.netlify.app/',
        repository: 'https://github.com/OrlandoLeyva/URL-shortening'
    },
    {
        name: 'Quizzical',
        description: 'Try to answer all the questions',
        poster: quizzicalPoster,
        type: 'react',
        site: 'https://quizzical-app-orlando.netlify.app/',
        repository: 'https://github.com/OrlandoLeyva/quizzical-app'
    },
    {
        name: 'Movies searcher',
        description: 'This APP provides a interface for users to search for a movie, get a list of results and add a to movie to the Watchlist',
        poster: moviesSearcherPoster,
        type: 'react',
        site: 'https://movies-searcher-orlando.netlify.app/',
        repository: 'https://github.com/OrlandoLeyva/Movies-Searcher'
    },

    {
        name: 'Multi-step-form',
        description: 'This form walks users through four steps to acquire a service. This project showcases my proficiency In react development. I used context to share data across components without having to pass it using props through the components hierarchy. I used react-router 6 to manage the navigation between the different steps of the form. I created a Error component for displaying an users-friendly error message. Throughout the development process I used important hooks like: useState, useEffect, useRef, useNavigation. I really focused on implementing the best practices and creating a well-structured project.',
        poster: formPoster,
        type: 'react',
        site: 'https://multi-step-form-orlando.netlify.app/',
        repository: 'https://github.com/OrlandoLeyva/multi-step-form'
    }
]