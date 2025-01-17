import React, { Component } from 'react';
import Axios from 'axios';

 import {Route, BrowserRouter, Switch, Link, NavLink} from 'react-router-dom';
 import './App.css';
 import {Navbar, Nav} from 'react-bootstrap';
import About from './component/About'
 import Home from './component/Home'
import Recipes from './component/Recipes';
import Singup from './component/Signup';

//   import  serviceWorker from './serviceWorker';



class App extends Component {


  render() {
    return (
    
      <div className="App">
         <BrowserRouter>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"> R E C I P E S</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
      <Link class="nav-item nav-link" to="/recipes">Recipes</Link>

      <a class="nav-item nav-link" href="/about">About</a>
      <a class="nav-item nav-link" href="/sign">Sign up</a>

    </div>
  </div>
</nav>
         
     <Switch>

           <Route  path="/" exact component={Home} />
           <Route path="/about" exact component={About}/>
           <Route  path="/recipes" exact component={Recipes}/>

           {/* <Route  path="/recipes/:id" exact component={details}/> */}

           <Route path="/sign" exact component={Singup}/>

        </Switch>
        <div className="sa"> 
            <nav class="navbar navbar-light bg-light">
  <form class="form-inline"></form>
     <footer >Copyright &copy; ASHJAN. </footer>
</nav>
</div>
     </BrowserRouter>
    
      </div>
    );

  }


}

export default App;
