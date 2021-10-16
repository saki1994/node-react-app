 import React from 'react';
 import Form from './components/Form';
 import Home from './components/Home';
 import Search from './components/Search';
 import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
 
    <div>
     <Router>
       <Switch>
         <Route exact path="/">
          <Home></Home>
         </Route>
         <Route path="/WordForm">
          <Form />
         </Route>
         <Route path="/GetLanguage">
          <Search />
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
