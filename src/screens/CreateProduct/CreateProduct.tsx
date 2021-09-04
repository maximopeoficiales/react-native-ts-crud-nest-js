import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Headline} from 'react-native-paper';
import Toast from 'react-native-toast-message';
// import Toast from 'react-native-toast-message';
import FormCreateProduct from '../../components/FormCreateProduct/FormCreateProduct';
import {globalStyle} from '../../styles/global';

interface MyProps {}
const defaultProps: MyProps = {};
const CreateProduct = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {} = props;

  return (
    <ScrollView style={globalStyle.container}>
      <Headline style={globalStyle.title}>Add Product</Headline>
      <FormCreateProduct />
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default CreateProduct;
