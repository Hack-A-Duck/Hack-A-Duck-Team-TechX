
import Home from './components/Home/Home';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom';



function App() {
 
  return (
    
   <Router>
     <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/login' component={Login}/>
       <Route exact path='/signup' component={SignUp}/>
     </Switch>
   </Router>
  );
}

export default App;
