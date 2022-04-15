import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'

const OrderScreen = () => {
    const [order, setOrder] = useState([

    ])

  return (
    <View style={styles.container}>
        <Text>MY ORDERS</Text>
        <FlatList 
            numColumns={1}
            data={order}
            style={styles.orderStyle}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <View>
                    
                </View>
            )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 0,
        paddingVertical: 1,
        backgroundColor: 'grey',
        marginEnd: 0
    },
    orderStyle: {

    }
})

export default OrderScreen;