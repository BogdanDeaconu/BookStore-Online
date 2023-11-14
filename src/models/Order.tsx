import BookModel from "./Book";
import CheckoutInformationModel from "./CheckoutInformation";

class OrderModel{
    id: number;
    items: BookModel[];
    status: string;
    title: string;
    price: number;
    quantity: number;
    checkoutInformation: CheckoutInformationModel;


    constructor(id: number, items: BookModel[], status: string, title: string, price: number, quantity: number, checkoutInformation: CheckoutInformationModel){
        this.id = id;
        this.items = items;
        this.status = status;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.checkoutInformation = checkoutInformation;
    }

}

export default OrderModel;