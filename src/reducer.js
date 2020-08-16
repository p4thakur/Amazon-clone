//logic of data layer

export const initialState = {
  basket: [], //intilize and empty bucket
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0); //0 is my inital amount. amount is one that contain my result its like x=x+item.price

//deucer take state means our object and we do some action

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, //it says return all the state(basket user and more)
        //change the basket to whatever it was before(state.basket) + action.item state.
        //so now new item is added on my bucket
        basket: [...state.basket, action.item],
      }; //I have to return something here/
      break;

    case "REMOVE_FROM_BASKET":
      //let's create copy of our basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketIndexItem) => basketIndexItem.id === action.id
      );

      if (index >= 0) {
        //basket with action id exist
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product  id : ${action.id}`);
      }
      //return all state and basket is updated to newBasket
      return { ...state, basket: newBasket };
      break;

    default:
      return state;
  }
}

export default reducer;
