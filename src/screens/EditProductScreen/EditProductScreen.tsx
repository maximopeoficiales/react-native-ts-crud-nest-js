import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
interface MyProps {}
const defaultProps: MyProps = {};
const EditProductScreen = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {} = props;
  return (
    <View>
      <Text>EditProductScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  
});
export default EditProductScreen;
