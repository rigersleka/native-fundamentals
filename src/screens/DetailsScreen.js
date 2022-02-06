import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ navigation, route }) => {
  console.log(route.params);
  const movie = route.params.movie;

  useEffect(() => {
    var xhr = new XMLHttpRequest();
    xhr.open(
      'GET',
      'http://www.omdbapi.com/?apikey=cc456efe&t=Star+Wars&y=1977'
    );
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        console.log(`HTTP request failet ${xhr.status}`);
      }
    };

    console.log(xhr);
  }, []);

  return (
    <View style={styles.mainView}>
      <Text style={{ fontSize: 20 }}>
        {movie.title} ({movie.release})
      </Text>
      <Text style={{ fontSize: 100 }}>{movie.screenNumber}</Text>
      <Button
        title='Go to Image'
        onPress={() => {
          navigation.navigate('BigImageView');
        }}
      />
      <Button
        title='More Details'
        onPress={() => {
          movie.screenNumber = movie.screenNumber + 1;
          console.log(movie);
          navigation.push('Details_to_Details', { movie: movie }); // push a new route to navigation if doesnt exist
        }}
      />
      <Button
        title='Go Back to Home'
        onPress={() => {
          navigation.popToTop(); // getBack and pop() navigates one by one to previous pages
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
