import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Item from './Components/Item';
import ItemList from './Components/ItemList';
import ItemDetails from './Components/ItemDetails';

export default function App() {
  return (
    <View style={styles.container}>
     {/* <Item /> */}
     {/* <ItemList /> */}
     <ItemDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop:100
  },
});
