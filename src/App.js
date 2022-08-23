import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
// import About from './pages/About';
// import Posts from './pages/Posts';
// import Header from './components/header/Header';
// import PageNotFound from './components/footer/PageNotFound';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import { Container } from 'react-bootstrap';
import RouterComponent from 'routes'
import { InlineWidget } from "react-calendly";
import ReactWhatsapp from 'react-whatsapp';

function App() {

  return (
    <>
      <RouterComponent />

      {/* <div className="App">
        <InlineWidget url="https://calendly.com/your_scheduling_page" />
      </div>
      <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" />
 */}


    </>
  );
}

export default App;
