import axios from '../axios-orders';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const FETCH_INGR_FAILED = 'FETCH_INGR_FAILED';

export const fetchInitIngredients = () => {
    return dispatch => {
        axios.get('https://react-my-burger-e7af4-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json')
            .then(res => {
                console.log("RESPONSE " + res.data);
                dispatch({ type: 'SET_INGREDIENTS', ingredients: res.data });
            })
            .catch(error => {
                dispatch({ type: 'FETCH_INGR_FAILED' });
            });
    };
};