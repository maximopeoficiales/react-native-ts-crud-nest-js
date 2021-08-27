import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Headline, TextInput} from 'react-native-paper';
import {Product} from '../../api/entitys/Product.dto';
import {useForm} from '../../hooks/useForm';
import {globalStyle} from '../../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface MyProps {}
const defaultProps: MyProps = {};
const CreateProduct = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {} = props;
  const {formValues: product, handlerChange} = useForm<Partial<Product>>({
    name: 'POlloo',
  });

  useEffect(() => {
    console.log(product);
  }, [product]);

  const {description, name, price, salePrice} = product;
  const handlerPress = () => {};
  return (
    <ScrollView style={globalStyle.container}>
      <Headline style={globalStyle.title}>Add Product</Headline>
      <TextInput
        value={name}
        onChangeText={text => {
          handlerChange('name', text);
        }}
        style={styles.input}
        placeholder="Example: Chicken"
        mode="outlined"
        label="Name"
      />

      <TextInput
        value={description}
        onChangeText={text => {
          handlerChange('description', text);
        }}
        style={styles.input}
        placeholder="Example: Chicken Description"
        mode="outlined"
        label="Description"
      />
      <TextInput
        value={price?.toString()}
        onChangeText={text => {
          handlerChange('price', text);
        }}
        style={styles.input}
        placeholder="Example: 10.00"
        mode="outlined"
        label="Price"
        keyboardType="numeric"
      />
      <TextInput
        onChangeText={text => {
          handlerChange('salePrice', text);
        }}
        value={salePrice?.toString()}
        style={styles.input}
        placeholder="Example: 15.00"
        mode="outlined"
        label="Sale Price"
        keyboardType="numeric"
      />
      <Button mode="contained" onPress={handlerPress}>
        <Icon name="save" size={20} /> Save Product
      </Button>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
  },
});
export default CreateProduct;
