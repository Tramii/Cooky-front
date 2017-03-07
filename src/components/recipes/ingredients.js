import React, {Component} from 'react';
import axios from 'axios';
import {Table, Button, Well} from 'react-bootstrap';
import Ingredient from './ingredient';
import Input from '../sign/input'

const ROOT_URL = "https://tramii-cooky-back.herokuapp.com";

class Ingredients extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredienteConstruccion:''
    }
  }

  lines() {
    this.props.ingredients.map(function(ingredient, i) {
    return (
      <Ingredient name={ingredient.name} key={i}/>
    );
  });
  }

  nuevoIngrediente(event)
  {
    this.setState({ingredienteConstruccion: {name:event}})
  }

  saveIngredient(){
    this.props.ingredients.push(ingredienteConstruccion);
    this.setState({ingredienteConstruccion : ''});
  }

  render(){
    return(
      <div>
        <Well>
            {this.lines}
            <Input name="nuevoIngrediente" type="text"  handleInputChange={this.nuevoIngrediente}
             placeholder="New Ingredient" value={this.state.ingredienteConstruccion.name}/>
             <Button onClick={() => {this.saveIngredient()}}  bsStyle="info">Insert ingredient!</Button>
        </Well>
      </div>
    );
  }

}

export default Ingredients;
