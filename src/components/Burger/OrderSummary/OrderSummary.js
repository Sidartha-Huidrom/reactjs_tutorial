import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}> 
                <span style={{textTransform: 'capitalize' }}>{igKey}</span> : {props.ingredients[igKey]} 
            </li>)
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <p>Price : <span>{props.price.toFixed(2)}</span></p>
            <Button 
                clicked={props.purchaseCanceled}
                btnType="Danger">CANCEL
            </Button>
            <Button
                clicked={props.purchaseContinued}
                btnType="Success">CONTINUE
            </Button>
        </Aux>
    );
}


export default orderSummary;