import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons'
import Item from './Item'

export class ItemList extends Component {
  list = [
    { id: "1", name: "Bike Jacket SoftShel Warm", price: "$99", image: require('../assets/hoodie2.jpg') },
    { id: "2", name: "I lOVE CODING", price: "$100", image: require('../assets/hoodie3.webp') },
    { id: "3", name: "CODETRAIN", price: "$200", image: require('../assets/hoodie2.jpg') },
    { id: "4", name: "React Native", price: "$90", image: require('../assets/hoodie4.jpg') },

  ]
  render() {
    return (
      <ScrollView  style={styles.container} showsVerticalScrollIndicator={false}>
         <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.leftIcon}>
            <AntDesign name="arrowleft" size={20}  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightIcon}>
            <Feather name="shopping-cart" size={20}  />
          </TouchableOpacity>
        </View>
      
        <View style={styles.textContainer}>
          <Text style={styles.text}>Woman Jacket</Text>
        </View>

          <View style={styles.inputcontainer}>
            <TextInput placeholder="Search Jacket"  placeholderTextColor="#858383" style={styles.input} />
            <Text style={styles.filter}>Filter</Text>
          </View>

        <View>
        
          <FlatList
            data={this.list}
            renderItem={({ item }) => {
              return <Item name={item.name}
                price={item.price}
                img={item.image}
              />
            }}
            KeyExtractor={(item) => item.id} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  
    marginHorizontal: 10,
    backgroundColor: "#ededed",
  },
  filter:{
    position:"absolute",
    top:10,
    right:50,
    fontSize:20,
    color:"blue",
    fontWeight:"bold"
    
  },
  input:{
    borderWidth:0.5,
    height:50,
    marginHorizontal:30,
    borderRadius:15,
    backgroundColor:"white",
    paddingLeft:20
  },
  inputcontainer:{
    marginBottom:20
  },
  iconContainer: {
    flexDirection: "row",
    marginVertical:5,
    marginHorizontal:15
  },
  leftIcon: {
    backgroundColor:"white",
    borderRadius:50,
    width:40,
    height:40,
    justifyContent:"center",
    alignSelf:"center",
    alignItems:"center",
  },
  rightIcon: {
    position: "absolute",
    right: 0,
    backgroundColor:"white",
    borderRadius:50,
    width:40,
    height:40,
    justifyContent:"center",
    alignSelf:"center",
    alignItems:"center",

  },
  textContainer: {
    marginBottom: 20,
    marginLeft: 20
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical:10
  },
})

export default ItemList
