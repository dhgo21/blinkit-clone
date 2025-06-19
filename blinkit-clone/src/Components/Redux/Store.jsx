import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState={
    cartitems:[],
    orderd:[],
    addresses: JSON.parse(localStorage.getItem("userAddresses")) || [],
    chooseaddresses:[],
    orders: JSON.parse(localStorage.getItem("userOrders")) || [],
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
            state.chooseaddresses = [action.payload];
        },
        placeOrder(state)
        {
            if (state.cartitems.length > 0)
            {
                const date = new Date()
                const formatted = date.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "2-digit",
                }); // Example: "19 June 25"
                const timeIST = date.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                    timeZone: "Asia/Kolkata",
                }); // Example: "2:30 PM"

                const orderData = {
                    items: [...state.cartitems],
                    orderTime: {
                        formatted,
                        timeIST
                    }
                };

                state.orders.push(orderData)
                state.cartitems = []

                  //  Save to localStorage
                localStorage.setItem("userOrders", JSON.stringify(state.orders));
            }
        }

    }
})

export const {addToCart,increQty,decreQty,orderDetails,removeAddress,addAddress,editAddress,chooseAddress,placeOrder}=slice.actions


export const store=configureStore({
    reducer:{
        slice:slice.reducer
    }
})
export default slice.reducer;
