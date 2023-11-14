class BookModel {
  id: number;
  image: string;
  title: string;
  description: string;
  author: string;
  price: number;
  newRelease: boolean;
  constructor(image: string, title: string, author: string, price: number, newRelease: boolean, description: string, id: number) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.author = author;
    this.price = price;
    this.newRelease = newRelease;
    this.description = description;
  }
}

export default BookModel;
