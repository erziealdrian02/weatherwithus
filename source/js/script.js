// eslint-disable-next-line import/extensions
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/bootstrap-icons.svg';
import 'regenerator-runtime';
import '../css/responsive.css';
import '../css/style-copy.css';
import '../css/style.css';
import '../css/weather.css';
import './components/componen-html';
import App from './views/app';

const app = new App({
  content: document.querySelector('main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
