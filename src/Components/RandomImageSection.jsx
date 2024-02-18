import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';

const images = [
  { id: '1', uri: '../../images/41.jpg' },
  { id: '2', uri: '../../images/42.jpg' },
  { id: '3', uri: '../../images/top-profile.jpg' },
];

const numColumns = 3; 

const RandomImagesSection = () => {
  return (
    <FlatList
      data={images}
      renderItem={({ item }) => (
        <Image source={{ uri: item.uri }} style={styles.image} />
      )}
      keyExtractor={item => item.id}
      numColumns={numColumns}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    aspectRatio: 1,
    margin: 1, 
  },
});

export default RandomImagesSection;
