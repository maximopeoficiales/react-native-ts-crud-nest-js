import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Headline, HelperText, TextInput} from 'react-native-paper';
import {Product} from '../../api/entitys/Product.dto';
import {globalStyle} from '../../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {showErrors} from '../../utils';

interface MyProps {}
const defaultProps: MyProps = {};
const CreateProduct = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {} = props;
  const initialProduct: Partial<Product> = {
    description: '',
    name: '',
    price: 1,
    salePrice: 1,
  };

  const createProductSchema: Yup.SchemaOf<Partial<Product>> = Yup.object({
    name: Yup.string().required('Required').min(4),
    description: Yup.string().required('Required').min(4),
    price: Yup.number().required('Required'),
    salePrice: Yup.number().required('Required'),
  }).defined();

  return (
    <ScrollView style={globalStyle.container}>
      <Headline style={globalStyle.title}>Add Product</Headline>
      <Formik
        initialValues={initialProduct}
        onSubmit={(values, {resetForm}) => {
          console.log(values);

          resetForm({
            values: initialProduct,
          });
        }}
        validationSchema={createProductSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View>
            <TextInput
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              style={styles.input}
              placeholder="Example: Chicken"
              mode="outlined"
              label="Name"
            />
            <HelperText type="error" visible={showErrors(errors.name)}>
              {errors.name}
            </HelperText>
            <TextInput
              value={values.description}
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              style={styles.input}
              placeholder="Example: Chicken Description"
              mode="outlined"
              label="Description"
            />
            <HelperText type="error" visible={showErrors(errors.description)}>
              {errors.description}
            </HelperText>

            <TextInput
              value={values.price?.toString()}
              onChangeText={handleChange('price')}
              onBlur={handleBlur('price')}
              style={styles.input}
              placeholder="Example: 10.00"
              mode="outlined"
              label="Price"
              keyboardType="numeric"
            />
            <HelperText type="error" visible={showErrors(errors.description)}>
              {errors.price}
            </HelperText>

            <TextInput
              onChangeText={handleChange('salePrice')}
              onBlur={handleBlur('salePrice')}
              value={values.salePrice?.toString()}
              style={styles.input}
              placeholder="Example: 15.00"
              mode="outlined"
              label="Sale Price"
              keyboardType="numeric"
            />
            <HelperText type="error" visible={showErrors(errors.salePrice)}>
              {errors.salePrice}
            </HelperText>

            <Button
              mode="contained"
              onPress={handleSubmit}
              // disabled={!isValid}
            >
              <Icon name="save" size={20} /> Save Product
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    marginTop: 10,
  },
});
export default CreateProduct;
