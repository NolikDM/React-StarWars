import React, {useState, useEffect} from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';


import Navbar from './Components/Navbar';

import Home from './Components/Home';
import People from './Components/People';
import Favourite from './Components/Favourite';
import Other from './Components/Other';

function App() {
   const [people, setPeople] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
       async function fetchPeople() {
           let res = await fetch('http https://swapi.dev/api/people/?format=json');
           let data = await res.json();
           setPeople(data.results);
       }

       fetchPeople();
       setLoading(false);
   }, []);

   console.log('data', people);
   return (
       <div className="App">
           <Router>
               <Navbar />
               <Container>
                   {loading ? (
                       <Dimmer active inverted>
                           <Loader inverted>Loading</Loader>
                       </Dimmer>
                   ) : (
                       <Switch>
                           <Route exact path="/" component={Home} />
                           <Route exact path="/people" component={People} />
                           <Route exact path="/favourite" component={Favourite} />
                           <Route component={Other} />
                       </Switch>
                   )}
               </Container>
           </Router>
       </div>

  );
}

export default App;
