import {useState} from 'react';
import Home from './components/Home/Home';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import {BrowserRouter as Router , Switch ,Route, Redirect} from 'react-router-dom';
import Firebase,{Auth} from './components/firebase/firebase';


function App() {
  const [uid , setUid]  = useState();
  const [user,setUser] = useState();
  Auth.onAuthStateChanged(
    (u)=>{
      console.log(u);
      setUser(u);
    }
  )
  return (
    
   <Router>
     <Switch>
       <Route exact path='/' >
         <Home uid={uid}  />
         </Route> 
       <Route exact path='/login' >
         {user?<Redirect to='/'/> :<Login user={user}/>  } 
         </Route>
       <Route exact path='/signup' >
       {user?<Redirect to='/'/> :<SignUp user={user}/>  } 
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
