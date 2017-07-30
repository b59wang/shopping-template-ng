export class Item {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  category: string;

  constructor(id: string, name: string, image: string, description: string, price: number, category: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.image = image;
  }
}
