import React, { Component } from 'react'
import Axios from 'axios'
import recipes from './component/Recipes';
import about from './component/About';
// import {Route, BrowserRouter, Switch, Link, NavLink} from 'react-router-dom';
import Recipes from './component/Recipes';
//  import './App.css';
//   import  serviceWorker from './serviceWorker';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recipes: ""
    }
  }

  componentDidMount() {
    const axios = require("axios");

    axios({
      "method": "GET",
      "url": "https://recipe-puppy.p.rapidapi.com/",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
        "x-rapidapi-key": "9d4c30e844msh5f94db0e8dc7d85p11785fjsnac42ab74339c"
      }
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }


  //   componentDidMount(){
  //     const URL = 'https://api.edamam.com/search?q=chicken&app_id=f7ff37c7&app_key=f8741034b92721cc3e6fad606a197d26&from=0&to=3&calories=591-722&health=alcohol-free'

  //     axios.get(URL)
  //       .then(res => {
  //         const recipes = res.data.recipe; 
  //           this.setState({ recipes });

  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  // }

  //  let getRecipes = (recipe) =>{
  //    const url = ("https://api.edamam.com/search?q=chicken&app_id=f7ff37c7&app_key=f8741034b92721cc3e6fad606a197d26&from=0&to=3&calories=591-722&health=alcohol-free")

  //     axios({
  //       method: 'GET',
  //       url: url
  //     }).then(response => {

  //     })
  //         }

  //   componentDidMount =(recipes)=>{
  //     this.getRecipes()
  //   }




  render() {
    return (
      // <BrowserRouter>
      <div className="App">
      {/* //   <nav>
      //     <link to="/">Home</link>
      //     <link to="/recipes">Recipes</link>
      //     <link to="/contact">Contact</link>
      //   </nav> */}
        {/* <Recipes recipes={this.props.recipes.map((item, index)=>{
              return (
                  <ul>recipes</ul>
              ) */}
        {/* })  } /> */}


      </div>
      // </BrowserRouter>
    );

  }


}

export default App;
