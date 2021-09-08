import {useRoute} from '@react-navigation/core';
import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Button, Headline, Subheading} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {globalStyle} from '../../styles/global';
import {RootRouteProps} from '../RootStackParams';
interface MyProps {}
const defaultProps: MyProps = {};
const EditProduct = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {} = props;

  const {
    params: {product},
  } = useRoute<RootRouteProps<'EditProductStack'>>();
  const {description, price, salePrice, name} = product;
  const deleteProduct = () => {
    Toast.show({
      type: 'success',
      text1: 'Deleted Product',
      text2: `You have removed the Product: ${name}`,
    });
  };
  const showConfirm = () => {
    Alert.alert(
      'You want to delete a product?',
      'A deleted product cannot be recovered',
      [
        {text: 'Yes, deleted', onPress: deleteProduct},
        {text: 'Cancel', style: 'cancel'},
      ],
    );
  };

  return (
    <View style={globalStyle.container}>
      <Headline style={globalStyle.title}>{name}</Headline>
      <Text style={styles.text}>
        Description: <Subheading>{description}</Subheading>
      </Text>
      <Text style={styles.text}>
        Price: <Subheading>{price}</Subheading>
      </Text>
      <Text style={styles.text}>
        SalePrice <Subheading>{salePrice}</Subheading>
      </Text>
      <Button
        onPress={showConfirm}
        style={styles.button}
        mode="contained"
        icon="cancel">
        Delete Product
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 18,
  },
  button: {
    marginTop: 50,
    backgroundColor: '#B42B51',
  },
});
export default EditProduct;
