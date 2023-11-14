import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import userStatusSlice from './use-status-slice';
import ordersSlice from './ordes-slice';

export const store = configureStore({
    reducer: { cart: cartSlice.reducer, userStatus: userStatusSlice.reducer, orders: ordersSlice.reducer },
});

export default store;

