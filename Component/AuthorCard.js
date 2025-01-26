import { Image, ImageBackground, ScrollView, StyleSheet, 
  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const AuthorCard = ({author}) => {
    
  return (
    
    <View 
    style={{ 
      width: 300, 
      height: 200, 
      borderRadius: 10, 
      overflow: 'hidden', 
      marginBottom: 20 
    }}
  >
    <TouchableOpacity>
       <ImageBackground
    source={{ uri: `https:${author.shareImages[0].fields.file.url}` }}
    style={{ height: '100%', width:'100%', justifyContent: 'center', alignItems: 'center' }}
    resizeMode="cover"
  >
    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', 
      backgroundColor: 'rgba(0,0,0,0.5)', padding: 10, borderRadius: 10}}>
      {author.pageTitle}
    </Text>
  </ImageBackground>
 </TouchableOpacity>
  </View>
  )
}

export default AuthorCard

const styles = StyleSheet.create({})