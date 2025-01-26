import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header1 = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>H&M</Text>
      <View style={styles.icons}>
        <TouchableOpacity  style={styles.iButton}>
          <Icon name="heart" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iButton}>
          <Icon name="shopping-cart" size={24} color="white" />
          
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 40,
    backgroundColor: '#333', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iButton: {
    marginLeft: 20,
  },
});

export default Header1;