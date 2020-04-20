import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import classes from './ContactData.css';

class ContactData extends Component{

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }


    orderHandler = (event) => {
        
        //prvent reload
        event.preventDefault();
    

        this.setState({
            loading: true
        })
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Max Schawrzmuller',
                address: {
                    street: 'TestStreet 1',
                    zipCode: '795001',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                console.log('Response : ',response)
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(error => {
                console.log('Error',error)
                this.setState({
                    loading: false
                });
            });
    }


    render () {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name"/>
                <input className={classes.Input} type="email" name="email" placeholder="Your email"/>
                <input className={classes.Input} type="text" name="street" placeholder="Your street"/>
                <input className={classes.Input} type="text" name="postal" placeholder="Your Postal Code"/>

                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>   
        );
        
        if(this.state.loading){
            form= <Spinner />
        }
        
        return(
            <div className={classes.ContactData}> 
                <h4>Enter your contact data</h4> 
                {form}
            </div>
        );

    }

}

export default ContactData;