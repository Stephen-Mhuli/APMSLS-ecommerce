//imports/Packages->built-in
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList} from "react-native";

//components
import ProductList from './ProductList';
//products data
const Data = require('../../Utilities/MockData/products.json');

//Functional component start here
const ProductContainer=()=>{

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setProducts(Data);

        return ()=>{
            setProducts([]);
        }
    },[])

    return(
        <View style={styles.container}>
            <FlatList 
                // horizontal
                key={'#'}
                numColumns={2}
                keyExtractor={item => '#' + item.id}
                data={products}
                renderItem={({item})=> <ProductList key={item.id} item={item}/>}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100
    },

}) 

export default ProductContainer;