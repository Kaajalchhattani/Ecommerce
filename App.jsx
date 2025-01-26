import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import useContentful from './Component/useContentful';
import useContentful2 from './Component/useContentful2';
import AuthorCard from './Component/AuthorCard';
import {Header} from 'react-native/Libraries/NewAppScreen';
import Header1 from './Component/Header1';
import Icon from 'react-native-vector-icons/Ionicons';
import SliderCard from './Component/SliderCard';

const App = () => {
  const [authors, setAuthors] = useState([]);
  const [images, setImage] = useState([]);
  const {getAuthors} = useContentful();
  const {getImage} = useContentful2();
  useEffect(() => {
    getAuthors().then(response => setAuthors(response));
    getImage().then(response => setImage(response));
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header1></Header1>
      <ScrollView
        horizontal
        style={{ flex: 1, margin: 0 }}
        showsHorizontalScrollIndicator={false}
      >
        {images.map((media, index) => (
          <SliderCard key={index} media={media} />
        ))}
      </ScrollView>


      <ScrollView
        style={{flex: 1, marginLeft: 15, marginRight: 15, padding: 0}}>
        <ScrollView
          style={{flex: 1, width: '100%'}}
          contentContainerStyle={{
            alignItems: 'center',
            paddingVertical: 20,
            height: '100%',
          }}>
          {authors.map((author, index) => (
            <AuthorCard key={index} author={author} />
          ))}
        </ScrollView>
      </ScrollView>

      
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
