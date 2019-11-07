import React, { Component } from 'react'
import axios from 'axios';

import RecipesCard from "./RecipesCard"

class Recipes extends Component {
    
state= {
    recipes: []
};
componentDidMount() {

    axios
      .get(
        "https://api.edamam.com/search?q=breakfast&app_id=f7ff37c7&app_key=f8741034b92721cc3e6fad606a197d26&from=0&to=100&calories=591-722&health=alcohol-free"
      )
      .then(res => {
        console.log(res)
        this.setState({
          recipes : res.data.hits
        });
      })
      .catch(err => console.log(err));
  }
  
  render() {
    console.log("i'm recipe");
    let fullData = this.state.recipes.map(arr => {
      return( 
        <RecipesCard card = {arr.recipe}/>
      )
    });

     console.log(fullData);

   
    return <div>
    {fullData}
    </div>;
  }
}

 export default Recipes;