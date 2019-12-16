import React from 'react';
import PropTypes from 'prop-types';

import ClassStyles from './BurgerIngredient.module.css';

const BurgerIngredient = ({type}) => {
    let ingredient = null;

    switch (type) {
        case ('bread-bottom'):
            ingredient = <div className={ClassStyles.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={ClassStyles.BreadTop}>
                    <div className={ClassStyles.Seeds1}></div>
                    <div className={ClassStyles.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={ClassStyles.Meat}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={ClassStyles.Cheese}></div>;
            break;
        case ('Salad'):
            ingredient = <div className={ClassStyles.Salad}></div>;
            break;
        case ('Bacon'):
            ingredient = <div className={ClassStyles.Bacon}></div>
            break;
        default:
            ingredient = null;
    }

    return ingredient;
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;