import React, { Component } from 'react';

import { Burger } from '../../components';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 1
        }
    }

    render() {
        return (
            <>
                <Burger ingrediens={this.state.ingredients}/>
                <div>Build controls</div>
            </>
        );
    }
}

export { BurgerBuilder };