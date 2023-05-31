import HomePage from "../views/pages/home-page";
import AboutUs from "../views/pages/about-us-page";
import Detail from "../views/pages/detail";

const routes = {
  "/": HomePage,
  "/weather-current": HomePage,
  "/about-us": AboutUs,
  "/detail/:id": Detail,
};

export default routes;
