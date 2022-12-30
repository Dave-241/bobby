import Nav from "./components/nav";
import './App.css';
import Nav_border from "./components/nav_border";
import Hero_section from "./components/hero_section";
import Port from "./components/port";
import Offer_services from "./components/offer_service";
import About from "./components/about";
import Mission from "./components/mission";
import Partner_logo from "./components/partners_logo";
import Customer_rev from "./components/customer_rev";
import Happy_client from "./components/happy_clients";
import Newsletter from "./components/newsletter";
import Fotter from "./components/fotter";
import Copyright from "./components/copyright";


const App = () => {
  return (
    <>
      <Nav />
      <Nav_border />
      <Hero_section />
      <Port />
      <Offer_services />
      <About />
      <Mission />
      <Partner_logo />
      <Customer_rev />
      <Happy_client />
      <Newsletter />
      <Fotter />
      <Copyright />
    </>
  )
}

export default App;
