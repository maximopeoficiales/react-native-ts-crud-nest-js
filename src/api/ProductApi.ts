import { Product } from "./entitys/Product";
import config from '../config';
import axios from "axios";
import { UpdateProductDto } from "./dto/update-product.dto";
class ProductApi {
    urlProducts: string;
    constructor() {
        this.urlProducts = `${config.API_URL}/products`;
    }

    async getAll() {
        let response = await axios.get(this.urlProducts);
        return (response.data) as UpdateProductDto[];
    }
    async create(product: Product) {
        let response = await axios.post(this.urlProducts, product);
        return (response.data) as UpdateProductDto;
    }

    async delete(idProduct: number) {
        let response = await axios.delete(`${this.urlProducts}/${idProduct}`);
        return (response.status == 200)

    }


}

export const productApi = new ProductApi();