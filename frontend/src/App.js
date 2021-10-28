 import React from 'react';
 import Form from './components/Form'; 
 import Search from './components/Search';  
 import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
 
    <div>
     <Router>
       <Switch>
         <Route exact path="/"> 
          <Form /> 
          <Search />  
         </Route> 
       </Switch>
     </Router>
    </div>
  );
}

export default App;
