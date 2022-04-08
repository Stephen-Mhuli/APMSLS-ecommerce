//imports/Packages->built-in
import React, { useState, useEffect } from "react";
import { View,  StyleSheet, ActivityIndicator, FlatList} from "react-native";
import { container, Header, Icon, Item, Input, Text, Container } from 'native-base';
//components
import ProductList from './ProductList';
//products data
//const Data = require('../../Utilities/models/products');

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
        <Container>
            <Header searchBar rounded>
                {/* <Item>
                    <Icon name="android-search" />
                    <Input 
                        //placeholder="Search"
                        //onFocus={}
                        //onChangeText={(text)=>{}}
                    />
                </Item> */}
            </Header>
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
        </Container>
        
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100
    },

}) 

export default ProductContainer;