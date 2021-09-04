import {faHamburger} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {FAB, Headline, List} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {UpdateProductDto} from '../../api/dto/update-product.dto';
import {productApi} from '../../api/ProductApi';
import {globalStyle} from '../../styles/global';
import {RootRouteProps} from '../RootStackParams';
interface MyProps {}
const defaultProps: MyProps = {};
const Home = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {} = props;
  const [products, setProducts] = useState<UpdateProductDto[]>([]);

  useEffect(() => {
    (async () => {
      try {
        let data = await productApi.getAll();
        setProducts(data);
        console.log('me ejecute');
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error en el servidor',
          text2: 'Ocurrio un error en la creacion del producto',
        });
      }
    })();
    Toast.show({
      type: 'info',
      text1: 'Se cargo el componente',
    });
  }, []);

  return (
    <View style={globalStyle.container}>
      <Headline style={globalStyle.title}>
        {products.length > 0
          ? 'Productos 🍗🍗'
          : 'Aun no existen Productos 😢😢'}
      </Headline>
      <FlatList
        data={products}
        keyExtractor={product => product.id?.toString() ?? 'key'}
        renderItem={({item}) => (
          <List.Item
            title={item.name}
            description={`${item.description} - ${item.price}`}
            left={props => (
              <List.Icon
                {...props}
                icon={() => <FontAwesomeIcon icon={faHamburger} />}
              />
            )}
          />
        )}
      />
      <FAB icon="plus" style={styles.fab} />
    </View>
  );
};
const styles = StyleSheet.create({
  fab: {
    backgroundColor: 'black',
    position: 'absolute',
    margin: 10,
    right: 0,
    bottom: 10,
  },
});
export default Home;
