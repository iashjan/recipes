import React, { Component } from 'react'



class Recipes extends Component {
    
    render() {

        return (
             <div className="card"> 
                 <img src={this.props.recipes.recipe.image} />
                 <h2>{this.props.recipes.recipe.label}</h2>
             <p>  <strong>Ingredients: </strong><li>{this.props.recipes.recipe.ingredientLines}</li> </p>
               <p><strong>Health Labels:</strong> {this.props.recipes.recipe.healthLabels}</p>
               <p><strong>Diet Labels:</strong> {this.props.recipes.recipe.dietLabels}</p>


               
            </div>
        )
    }
}
export default Recipes;