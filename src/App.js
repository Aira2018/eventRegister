import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//importing components
import Home from './components/home';
import Navigation from './components/navigation'
import Register from './components/register'
import SuccessPage from './components/success'


const App = () => {
  
    return (
      <Router>
        <Navigation/>
            <Switch>
              <Route path='/register/success'exact component={SuccessPage}/>
              <Route path='/' exact component={Home}/>
              <Route path='/register' exact component={Register}/>
            </Switch>
      </Router>
      
    )
  
}
export default App;
