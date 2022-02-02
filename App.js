import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import PAGES
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ImageScreen from './src/screens/ImageScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View
      style={sty.Root_View}
      onStartShouldSetResponder={() => {
        console.log('1st view should set');
        return false;
      }}
    >
      <Text style={sty.rt}>1st (Root) View</Text>
      <View
        style={sty.Second_View}
        onStartShouldSetResponder={() => {
          console.log('2nd view should set?');
          return true;
        }}
        onResponderGrant={() => {
          console.log('2nd view granted response');
        }}
        onResponderRelease={() => {
          console.log('2nd view released');
        }}
        onMoveShouldSetResponder={() => {
          console.log('2nd view should set move');
        }}
        onResponderMove={() => {
          console.log('2nd view responder move');
        }}
      >
        <Text style={sty.st}>2nd View</Text>
      </View>
      <View
        style={sty.Third_View}
        onStartShouldSetResponder={() => {
          console.log('3rd view should set?');
          return false;
        }}
      >
        <Text style={sty.tt}>3rd View</Text>
      </View>
    </View>
  );
}

const sty = StyleSheet.create({
  Root_View: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
  },
  rt: { fontSize: 20, fontWeight: 'bold' },
  Second_View: {
    flex: 0.7,
    marginTop: 50,
    marginLeft: 70,
    backgroundColor: 'burlywood',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'white',
  },
  st: { fontSize: 20, color: 'white', fontWeight: 'bold' },
  Third_View: {
    marginTop: 50,
    marginLeft: 70,
    width: 300,
    height: 300,
    backgroundColor: 'chocolate',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'white',
  },
  tt: { fontSize: 20, color: 'white', fontWeight: 'bold' },
});
