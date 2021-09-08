import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UpdateProductDto } from "../api/dto/update-product.dto";
export type RootStackParamList = {
    HomeStack: any;
    HomeTab: any;
    CreateProductTab: any;
    EditProductStack: { product: UpdateProductDto, setChargingProducts: any };
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
    RootStackParamList,
    RouteName
>;

export type authScreenProp = NativeStackNavigationProp<RootStackParamList>;
