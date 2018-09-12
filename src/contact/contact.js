import * as axios from 'axios';
import { sectionWrapperDOM } from '../app.js';

const template = require('./contact.handlebars');

export const init = () => {
  sectionWrapperDOM.innerHTML = template();
  axios.get('http://localhost:3001/api/content/contact')
    .then(function (response) {
      // process the first five posts and render each one
      const content = response.data;
      const articlesDOM = document.querySelector('.contact');
      articlesDOM.innerHTML = template({ content });
      for (let x = 0; x < content.value.length; x++) {
        document.title = content.value[1].value;
        break;
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

    axios.get('http://localhost:3001/api/content/newsletter')
    .then(function (response){
      const content = response.data;
      const articlesDOM = document.querySelector('.newsletter');
      articlesDOM.innerHTML = template({ content });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
