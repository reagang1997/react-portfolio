import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './components/NavTabs';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className='App'>
      <NavTabs/>
      <Route exact path="/react-portfolio/" component={AboutMe} />
      <Route exact path="/react-portfolio/portfolio" component={Portfolio} />
      <Route exact path="/react-portfolio/contact" component={Contact} />

      </div>

    </Router>
  );
}

export default App;
