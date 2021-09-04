import { Product } from "./entitys/Product";
import config from '../config';
import axios from "axios";
import { UpdateProductDto } from "./dto/update-product.dto";
class ProductApi {
    urlProducts: string;
    constructor() {
        this.urlProducts = `${config.API_URL}/products`;
    }

    async create(product: Product) {
        try {
            let response = await axios.post(this.urlProducts, product);
            return (response.data) as UpdateProductDto;
        } catch (error) {
            return null;
        }
    }
}

export const productApi = new ProductApi();