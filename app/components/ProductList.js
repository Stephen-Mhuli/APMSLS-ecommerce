//Built-n components,packages
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';

//Device dimensions
// let {width, height} = Dimensions.get('screen');
//components
import ProductCard from './ProductCard';

const ProductList = (props) => {

  const { item } = props;

  return (
    <TouchableOpacity style={{width: '50%'}}>
        <View style={{backgroundColor: 'gainsboro'}}>
            <ProductCard {...item}/>
        </View>
    </TouchableOpacity>
  )
}

export default ProductList