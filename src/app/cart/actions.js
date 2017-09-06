import * as ActionTypes from "./ActionTypes";

export function addItemToCart(product) {
    return {
        type: ActionTypes.ADD_ITEM,
        item: {
            id: product.id,
            name: product.name,
            price: product.price,
            qty: 1
        }
    }
}

export function removeItemFromCart(id) {
    return {
        type: ActionTypes.REMOVE_ITEM,
        id
    }
}

export function emptyCart() {
    return {
        type: ActionTypes.EMPTY_CART
    }
}

export function updateItemInCart(id, qty) {
    return {
        type: ActionTypes.UPDATE_ITEM,
        id,
        qty
    }
}