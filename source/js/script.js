/* eslint-disable import/extensions */
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/bootstrap-icons.svg";
import "regenerator-runtime";
import "../css/responsive.css";
import "../css/style-copy.css";
import "../css/style.css";
import "./components/componen-html";
import FooterToolsInitiator from "./utils/footer-tools-initiator";
import App from "./views/app";

const app = new App({
  content: document.querySelector("main-content"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();

  FooterToolsInitiator.init({
    subscribeButton: document.querySelector("#subscribePushNotification"),
    unsubscribeButton: document.querySelector("#unsubscribePushNotification"),
  });
});
