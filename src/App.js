import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './components/NavTabs';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <Router>
      <div className='App'>
      <NavTabs/>
      <Route exact path="/" component={AboutMe} />

      </div>

    </Router>
  );
}

export default App;
