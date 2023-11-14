class CartElementModel {
    id: number;
    title: string;
    author: string;
    price: number;
    totalPrice: number;
    image: string;

    constructor(id: number, title: string, author: string, price: number, image: string, totalPrice: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.totalPrice = totalPrice;
        this.image = image;
    }
} 

export default CartElementModel;