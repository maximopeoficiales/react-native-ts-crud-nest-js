import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Dialog, Paragraph, Portal} from 'react-native-paper';
interface MyProps {
  visibility: boolean;
  title: string;
  content: string;
  textBtn: string;
  hiddenDialog: () => void;
}
const DialogAlert = (props: MyProps) => {
  const {visibility, title, content, textBtn, hiddenDialog} = props;
  return (
    <Portal>
      <Dialog visible={visibility} onDismiss={hiddenDialog}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{content}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hiddenDialog}>{textBtn}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
const styles = StyleSheet.create({});
export default DialogAlert;
