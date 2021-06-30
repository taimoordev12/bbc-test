 import './App.css';
 import React  from "react"
 import Home from './Pages/Home';
 import {  Switch, Route } from 'react-router-dom';
 import RankingPage from './Components/Ranking-Page/RankingPage';
function App() {
  

  return (
    
   
       <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/ranking' component={RankingPage} />
              
          </Switch>
    
  );
}

export default App;
