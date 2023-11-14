import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [
      {
        id: 1,
        items: [
          {
            id: 1,
            title: "The Lean Startup",
            price: 29.99,
            author: "Eric Ries",
            image:
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",
            description: "sdasdas",
            newRelease: true,
          },
          {
            id: 2,
            title: "The Lean Startup",
            price: 29.99,
            author: "Eric Ries",
            image:
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",
            description: "sdasdas",
            newRelease: true,
          },
        ],
        checkoutInformation: {
          firstName: "John",
          lastName: "Doe",
          billingAddress: {
            country: "Austria",
            address: "Prundu Mic 41",
            number: "0766633881",
          },
          deliveryAddress: {
            country: "Austria",
            address: "Primaveri 23",
            number: "0755522770",
          },
          deliveryDate: "26/05/2021",
          observations: "Please call before delivery",
          paymentMethod: "cash",
          recommended: false,
        },
        status: "Completed",
        title: "#78234",
        price: 90,
        quantity: 2,
      },
      {
        id: 2,
        items: [
          {
            id: 1,
            title: "The Lean Startup",
            price: 29.99,
            author: "Eric Ries",
            image:
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",
            description: "sdasdas",
            newRelease: true,
          },
          {
            id: 2,
            title: "The Lean Startup",
            price: 29.99,
            author: "Eric Ries",
            image:
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",
            description: "sdasdas",
            newRelease: true,
          },
        ],
        checkoutInformation: {
          firstName: "John",
          lastName: "Doe",
          billingAddress: {
            country: "Austria",
            address: "Prundu Mic 41",
            number: "0766633881",
          },
          deliveryAddress: {
            country: "Austria",
            address: "Primaveri 23",
            number: "0755522770",
          },
          deliveryDate: "26/05/2021",
          observations: "Please call before delivery",
          paymentMethod: "cash",
          recommended: false,
        },
        status: "In shipment",
        title: "#78235",
        price: 90,
        quantity: 2,
      },
    ],
  },
  reducers: {
    addOrder(state, action) {
      const newOrder = {
        ...action.payload,
      };

      const existingOrderIndex = state.orders.findIndex(
        (order) => order.id === newOrder.id
      );
      if (existingOrderIndex !== -1) {
        newOrder.id = state.orders[existingOrderIndex].id;
        newOrder.items = state.orders[existingOrderIndex].items;
        newOrder.price = state.orders[existingOrderIndex].price;
        newOrder.quantity = state.orders[existingOrderIndex].quantity;
        state.orders[existingOrderIndex] = newOrder;
      } else {
        newOrder.id = state.orders.length + 1;
        state.orders.push(newOrder);
      }
    },
  },
});

export const ordersActions = ordersSlice.actions;
export default ordersSlice;
