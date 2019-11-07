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
        "https://api.edamam.com/search?q=breakfast&dinner&lunch&app_id=f7ff37c7&app_key=f8741034b92721cc3e6fad606a197d26&from=0&to=100&calories=591-722&health=alcohol-free"
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
//   componentDidMount() {

//     axios.get("https://api.edamam.com/search?q=chicken&app_id=f7ff37c7&app_key=f8741034b92721cc3e6fad606a197d26&from=0&to=100&calories=591-722&health=alcohol-free")
//       .then((res) => {
//         console.log(res)
//         const recipes = res.data.hits; 
//              this.setState({ recipes});
//       })
//       .catch((error) => {
//         console.log("error")
//       })
//   }


//     render() {
//         // var recipes = this.state.recipes !== null ?  <img  src={this.state.recipes.recipe.image} /> <h2>{this.state.recipes}</h2>  <p> <strong>Ingredients: </strong><li>{this.state.recipes.recipe.ingredientLines}</li> </p><p><strong>Health Labels:</strong> {this.state.recipes.recipe.healthLabels}</p><p><strong>Diet Labels:</strong> {this.state.recipes.recipe.dietLabels}</p> : <p>ss</p>
//         let fullData = this.state.data.map(arr => arr.recipe);
//         console.log(fullData);
    
//         let filterRes = fullData.map(index => {
//           return (
//             <div>
//               <h3>{index.label}</h3>
//               <img src={index.image} alt="" />;<p>{index.ingredientLines}</p>
//               <h3>{index.healthLabels}</h3>
//             </div>
//           );
//         });
    
//         return <div>{filterRes}</div>;
//       }
//     }

// console.log(this.state.recipes);

//         return (
//              <div className="card"> 
             
//                {/* {this.state.recipes !== null &&  <img  src={this.state.recipes.recipe.image} />
//                  <h2>{"this.state.recipes"}</h2> 
//               <p>  <strong>Ingredients: </strong><li>{"this.state.recipes.recipe.ingredientLines"}</li> </p>
//                <p><strong>Health Labels:</strong> {"this.state.recipes.recipe.healthLabels"}</p>
//                <p><strong>Diet Labels:</strong> {"this.state.recipes.recipe.dietLabels"}</p> }  */}


               
//             </div>
//         )
//     }
// }
 export default Recipes;