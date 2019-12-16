import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import ClassStyles from './Burger.module.css';

const Burger = ({ ingredients }) => {
    return (
        <div className={ClassStyles.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export { Burger };