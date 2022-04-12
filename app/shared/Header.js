import { View, StyleSheet} from 'react-native';
import React from 'react';
import { Header as  HeaderRNE, HeaderProps, Icon } from '@rneui/themed';

const Heading = () => {
  return (
    <View>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,//Todo Delete
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
    }
})

export default Heading;