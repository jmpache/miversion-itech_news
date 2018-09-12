import * as axios from 'axios';
import { sectionWrapperDOM } from '../app.js';

document.querySelector('#newsletter-btn').addEventListener('click', evt => {
  const emailDOM = document.querySelector('#newsletter-email');
  const payload = { email: emailDOM.value };
  axios.post('http://localhost:3001/api/newsletter-subscription', payload)
    .then(function (response) {
      // handle success
      console.log(response);
      if (response.status === 200) {
        alert('se ha registrado con exito');
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  });
