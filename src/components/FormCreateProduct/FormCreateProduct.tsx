import React from 'react';
import {Formik} from 'formik';
import {StyleSheet, View} from 'react-native';
import {Button, HelperText, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Yup from 'yup';
import {productApi} from '../../api/ProductApi';
import {Product} from '../../api/entitys/Product';
import {showErrors} from '../../utils';
import Toast from 'react-native-toast-message';
import {useNavigation, useRoute} from '@react-navigation/core';
import {authScreenProp, RootRouteProps} from '../../screens/RootStackParams';

interface MyProps {}
const defaultProps: MyProps = {};
const FormCreateProduct = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {} = props;
  const {params} = useRoute<RootRouteProps<'CreateProductTab'>>();
  
  const navigation = useNavigation<authScreenProp>();

  const redirectHomeScreen = () => {
    navigation.navigate('HomeTab');
  };

  const initialProduct: Product = {
    description: '',
    name: '',
    price: 1,
    salePrice: 1,
  };

  const createProductSchema: Yup.SchemaOf<Product> = Yup.object({
    name: Yup.string().required('Required').min(4),
    description: Yup.string().required('Required').min(4),
    price: Yup.number().required('Required'),
    salePrice: Yup.number().required('Required'),
  }).defined();

  return (
    <>
      <Formik
        initialValues={initialProduct}
        onSubmit={async (values, {resetForm}) => {
          // reseteo el formulario despues de crear el registro
          try {
            let product = await productApi.create(values);
            if (product) {
              // limpiar el formulario
              resetForm({
                values: initialProduct,
              });
              Toast.show({
                type: 'success',
                text1: 'Completed',
                text2: 'Product creado correctamente 👋',
              });
              // redireccionar
              params?.setChargingProducts(true);
              redirectHomeScreen();
            }
          } catch (error) {
            Toast.show({
              type: 'error',
              text1: 'Error en el servidor',
              text2: 'Ocurrio un error en la creacion del producto',
            });
          }
        }}
        validationSchema={createProductSchema}>
        {({handleChange, handleSubmit, values, errors, isValid}) => (
          <View>
            <TextInput
              value={values.name}
              onChangeText={handleChange('name')}
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

            <Button mode="contained" onPress={handleSubmit} disabled={!isValid}>
              <Icon name="save" size={20} /> Save Product
            </Button>
          </View>
        )}
      </Formik>
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    marginTop: 10,
  },
});
export default FormCreateProduct;
