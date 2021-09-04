import { Product } from "../entitys/Product";

export class CreateProductDto implements Product {
    name: string = "";
    description: string = "";
    price: number = 0;
    salePrice: number = 0;

}