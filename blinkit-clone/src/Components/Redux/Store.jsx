import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState={
    cartitems:[],
    orderd:[],
    addresses: JSON.parse(localStorage.getItem("userAddresses")) || [],
    chooseaddresses:[]
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
                toast.error("This product is already present in Cart")
            }
            else
            {
                state.cartitems.push({ ...action.payload, quantity: 1 })
                toast.success("Product Added to Cart")
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
        removeAddress(state, action) {
        state.addresses = state.addresses.filter(curr => curr.id !== action.payload.id);
        },
        addAddress(state, action) {
            const newAddress = { ...action.payload, id: Date.now() };
            state.addresses.push(newAddress);
        },
        editAddress(state, action) {
            const { id, updatedData } = action.payload;
            const index = state.addresses.findIndex(addr => addr.id === id);
            if (index >= 0) {
                state.addresses[index] = { ...state.addresses[index], ...updatedData };
                toast.success("Address Updated Successfully");
            } else {
                toast.error("Address not found!");
            }
        },
        chooseAddress(state, action)
        {
            // const exist = state.chooseaddresses.findIndex(curr => curr.id === action.payload.id);
            // if (exist === -1) {
            //     state.chooseaddresses = [action.payload]; // Only keep one chosen address
            // } else {
            //     state.chooseaddresses = [state.chooseaddresses[exist]];
            // }
            state.chooseaddresses = [action.payload];
        }
    }
})

export const {addToCart,increQty,decreQty,orderDetails,removeAddress,addAddress,editAddress,chooseAddress}=slice.actions


export const store=configureStore({
    reducer:{
        slice:slice.reducer
    }
})
export default slice.reducer;
