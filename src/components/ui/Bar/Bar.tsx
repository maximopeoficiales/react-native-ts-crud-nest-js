import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {authScreenProp} from '../../../screens/RootStackParams';

interface MyProps {}

const defaultProps: MyProps = {};
const Bar = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {} = props;

  const navigation = useNavigation<authScreenProp>();

  const handlerPress = () => {
    navigation.navigate('CreateProductTab');
  };

  return (
    <Button
      icon="plus-circle"
      onPress={handlerPress}
      mode="contained"
      style={{marginHorizontal: 10}}>
      Create Product
    </Button>
  );
};
const styles = StyleSheet.create({});
export default Bar;
