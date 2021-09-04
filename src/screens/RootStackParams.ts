import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    HomeStack: any;
    HomeTab: any;
    CreateProductTab: any;
    EditProductStack: any;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
    RootStackParamList,
    RouteName
>;

export type authScreenProp = NativeStackNavigationProp<RootStackParamList>;
