import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState={
    cartitems:[],
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
                    alert("min reached")
                }
            }
        }
    }
})

export const {addToCart,increQty,decreQty}=slice.actions


export const store=configureStore({
    reducer:{
        slice:slice.reducer
    }
})
export default slice.reducer;
