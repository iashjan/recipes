import React, { Component } from 'react'
import Axios from 'axios'
import recipes from './component/Recipes';
import about from './component/About';
 import {Route, BrowserRouter, Switch, Link, NavLink} from 'react-router-dom';
import Recipes from './component/Recipes';
 import './App.css';
 import home from './component/Home'
 import {Navbar, Nav} from 'react-bootstrap'

//   import  serviceWorker from './serviceWorker';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recipes: null
    }
  }

  componentDidMount() {
    const axios = require("axios");

    axios({
      "method": "GET",
      "url": "https://api.edamam.com/search?q=chicken&app_id=f7ff37c7&app_key=f8741034b92721cc3e6fad606a197d26&from=0&to=100&calories=591-722&health=alcohol-free",
     
      
    })
      .then((res) => {
        console.log(res)
        const recipes = res; 
             this.setState({ recipes});
      })
      .catch((error) => {
        console.log(error)
      })
  }



  render() {
    return (
    
      <div className="App">
         <BrowserRouter>


      <NavLink to="/home">Home</NavLink>
         <NavLink to="/recipes">Recipes</NavLink>
         <NavLink to="/about">About</NavLink>
         {/* <NavLink to="/contact">Contact</NavLink>  */}
         
         
        
        { this.state.recipes != null && this.state.recipes.data.hits.map((item, index)=>{
          
              return  <Recipes recipes={item}  />
              
        })
      }
     <Switch>

           <Route  path="/" exact component={Home} />
           <Route path="/about/" exact component={About}/>

           <Route path="/recipes" exact component={Recipes}/>

            if(!this.state.recipes) return <div className="work">error</div>}
                
            return 
              }          
          } /> 
        </Switch>

     </BrowserRouter>

      </div>
    );

  }


}

export default App;
