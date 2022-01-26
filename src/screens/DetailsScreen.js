import { NavigationHelpersContext } from '@react-navigation/native';
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ navigation, route }) => {
  const {screenNumber} = route.params; // desctruct item of params
  console.log(screenNumber);
  return (
    <View style={styles.mainView}>
      <Text style={{fontSize: 10}}>{screenNumber}</Text>
      <Button
        title='Go to Image'
        onPress={() => {
          navigation.navigate('BigImageView');
        }}
      />
      <Button
        title='Go to More Details Again'
        onPress={() => {
          navigation.push('Details_to_Details', {screenNumber: (screenNumber + 1)});
        }}
      />
      <Button
        title='Go Back Home'
        onPress={() => {
          navigation.goBack(); //similiar to pop() (popTo() - directly to first screen)
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

export default DetailsScreen;
