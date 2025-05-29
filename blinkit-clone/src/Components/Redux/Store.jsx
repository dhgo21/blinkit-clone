import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState={
    cartitems:[],
    orderd:[]
}

const slice=createSlice({
    name:"addtocart",
    initialState,
    reducers:{
        addToCart(state,action)
        {
            const exist=state.cartitems.findIndex(curr=>curr.id===action.payload.id)
            if(exist>=0)
            {
                alert("Already present in Cart")
            }
            else
            {
                state.cartitems.push({ ...action.payload, quantity: 1 })
                alert("Added to Cart")
            }
        },
        increQty(state,action)
        {
            const exist=state.cartitems.findIndex(curr=>curr.id===action.payload.id)
            if(exist>=0)
            {
                state.cartitems[exist].quantity += 1;
            }
        },
        decreQty(state,action)
        {
            const exist=state.cartitems.findIndex(curr=>curr.id===action.payload.id)
            if(exist>=0)
            {
                if(state.cartitems[exist].quantity>1)
                {
                    state.cartitems[exist].quantity -= 1;
                }
                else{
                    state.cartitems = state.cartitems.filter(
                    (item) => item.id !== action.payload.id);
                }
            }
        },
        orderDetails(state, action){
            state.orderd = action.payload;
        },
    }
})

export const {addToCart,increQty,decreQty,orderDetails}=slice.actions


export const store=configureStore({
    reducer:{
        slice:slice.reducer
    }
})
export default slice.reducer;
