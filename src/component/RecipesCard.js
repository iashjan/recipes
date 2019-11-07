import React, { Component } from 'react'

import {Card ,Button} from 'react-bootstrap';
export default class RecipesCard extends Component {
    render() {
        console.log("recipe card");
        console.log(this.props.card);

        return (
            

            <div class="card"  className="card">
            <img src={this.props.card.image} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{this.props.card.label}</h5>
            <p class="card-text"><strong>ingredients:</strong>{this.props.card.ingredientLines}</p>
            <p class="card-text"><strong>Health Labels:</strong>{this.props.card.healthLabels}</p>
            <p class="card-text"><strong>Diet Labels:</strong>{this.props.card.dietLabels}</p>

            
            <a href={this.props.card.url} class="btn btn-primary">source</a>
            </div>
            </div>
        )
    }
}
