import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
interface MyProps {}
const defaultProps: MyProps = {};
const HomeScreen = (props: MyProps) => {
  props = {...defaultProps, ...props};
  const {} = props;
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  
});
export default HomeScreen;
