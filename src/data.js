//todo: ID FOR EACH PROJECT
import countriesPoster from './assets/images/countries-poster.jpg'
import advicePoster from './assets/images/advice-app.poster.jpg'
import shortlyPoster from './assets/images/shortly-poster.png'
import quizzicalPoster from './assets/images/quizzical-poster.png'

export default [
    {

        name: 'Countries App',
        description: 'In this project I used an API to access data from countries and display it properly',
        poster: countriesPoster,
        type: 'basic',
        site: 'https://the-countries.netlify.app/',
        repository: 'https://github.com/OrlandoLeyva/rest-countries-api'
    },

    {
        name: 'Advice Generator',
        description: 'Generate a random advice each time users require it',
        poster: advicePoster,
        type: 'basic',
        site: 'https://advice-generator-orlando.netlify.app/',
        repository: 'https://github.com/OrlandoLeyva/Advice-generator'
    },

    {
        name: 'Shortly URL APP',
        description: 'Generate a short version of a valid URL',
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
    }
]