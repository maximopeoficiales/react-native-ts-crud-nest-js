import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Product } from '../api/entitys/Product';
export type RootStackParamList = {
    HomeStack: any;
    HomeTab: any;
    CreateProductTab: any;
    EditProductStack: { product: Product };
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
    RootStackParamList,
    RouteName
>;

export type authScreenProp = NativeStackNavigationProp<RootStackParamList>;
