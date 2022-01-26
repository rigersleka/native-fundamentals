import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const ImageScreen = ({ navigation, route }) => {
  console.log(route);
  
  return (
    <View style={styles.mainView}>
      <Text>Image Screen</Text>
      <Button
        title='Go Home'
        onPress={() => {
          navigation.navigate('App_to_Home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ImageScreen;
