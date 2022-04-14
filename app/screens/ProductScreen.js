import { View,Text, StyleSheet, FlatList, ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import {  Image, Divider } from '@rneui/themed';
import { Searchbar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BASE_URI = 'https://source.unsplash.com/random?sig=';

const ProductScreen = () => {

const [product, setProduct] = useState([
  {
    "id": 1,
      "name": "skiles.carmen",
      "description": "Nobis omnis facilis.",
      "price": 535,
      "category": "Atque recusandae.",
      "quantity": "881"
  },
  {
    "id": 2,
    "name": "qhessel",
    "description": "Non quasi nisi.",
    "price": 103,
    "category": "Beatae tenetur.",
    "quantity": "756",
  }
])

const [ searchQuery, setSearchQuery ] = useState('');

const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.search}
        iconColor='gray'
        placeholder="e.g Maize"
        onChangeText={onChangeSearch}
        value={searchQuery}
        clearIcon={({ size, color }) => (
          <MaterialIcons name="cancel" size={24} color='black' />
        )}
      />
      <FlatList
        data={[...new Array(10)].map((_, i) => i.toString())}
        numColumns={2}
        style={styles.productlist}
        keyExtractor={(e)=> e}
        renderItem={({ item })=>(
          <TouchableOpacity style={styles.productcard} onPress={()=>console.log('clicked')}>
            <Image
            source={{ uri: BASE_URI + item }}
            containerStyle={styles.imageStyle}
            PlaceholderContent={<ActivityIndicator />}
            />
            <View style={styles.productinfo}>
              <Text style={styles.productText}>Product: Rice</Text>
              <Text style={styles.productPrice}>Price: 3000@kg</Text>
              <Text style={styles.locationText}>Dar es salaam</Text>
            </View>
            {/* <Divider /> */}
          </TouchableOpacity>
          
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 1,
    backgroundColor: 'grey',
    marginEnd: 0
  },
  search: {
    marginHorizontal: 5,
    position: 'relative'
  },
  productcard: {
    width: windowWidth/2 -10,
    borderRadius: 10,
    margin: 4,
    backgroundColor: '#fff',
    
  },
  productlist: {
    width: '100%',
  },
  imageStyle: {
    aspectRatio: 1,
    borderRadius: 6,
    resizeMode: 'contain'

  },
  productinfo: {
    marginHorizontal: 6,
    marginVertical:5,
  },
  productText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 1,
    //marginTop: 80,
    marginLeft: 2
  },
  productPrice: {
    fontSize: 14,
    padding: 1,
    marginLeft: 2,
    color: 'blue'
  },
  locationText: {
    fontSize: 16,
    padding: 1,
    marginLeft: 2,
  }
  });
  

export default ProductScreen;