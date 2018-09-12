import * as axios from 'axios';
import { sectionWrapperDOM } from '../app.js';

const template = require('./home.handlebars');

export const init = () => {
  sectionWrapperDOM.innerHTML = template();
  document.title = "ITECH NEWS";
  let loader = document.createElement('div');
  loader.classList.add('loader');
  sectionWrapperDOM.appendChild(loader);
  axios.get('http://localhost:3001/api/posts')
    .then(function (response) {
      // process the first five posts and render each one
      const posts = response.data.slice(0, 5);
      const articlesDOM = document.querySelector('.home');
      for (let x = 0; x < posts.length; x++) {
        let newFormat = posts[x].date.substring(0,10);
        posts[x].date = newFormat;
      }
      articlesDOM.innerHTML = template({ posts });
      sectionWrapperDOM.removeChild(loader);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}