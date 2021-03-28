import Navbar from './Navbar'
import Home from './Home'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Request from './Request'
import RequestForm from './RequestForm'
import Appointments from './Appointments';
import CalendarComponent from './Calendar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  
  return (
    <Router>
    <div className="app">
    <Navbar />
      <Route exact path="/" component={SignUp}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/appointments" component={Appointments}/>
      <Route exact path="/request" component={Request}/>
      <Route exact path="/requestForm" component={RequestForm}/>
      <Route exact path="/calendar" component={CalendarComponent}/>
    </div>
    </Router>
  );
}


export default App;
