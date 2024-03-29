import * as Types from './../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('CART'));
var inittialState = data ? data : [];

const cart = (state = inittialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default: return [...state]; // the spread syntax(cú pháp lây lan) to insert the mid array into the arr array
    }
}

const findProductInCart = (cart, product) => {
    var index = -1;
    var n = cart.length;
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;