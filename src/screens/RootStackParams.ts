import { RouteProp } from "@react-navigation/native";

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