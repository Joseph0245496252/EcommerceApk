import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons'
import Item from './Item'

export class ItemList extends Component {
  list = [
    { id: "10", name: "Woman Jacket Yellow Color", price: "$70", image: require('../assets/jacket.jpg') },
    { id: "20", name: "Wonder Wonan Jacket", price: "$200", image: require('../assets/jacket3.jpg') },
    { id: "30", name: "Woman Jacket B&W", price: "$50", image: require('../assets/jacket1.jpg') },
    { id: "40", name: "Simple Woman Jacket", price: "$45", image: require('../assets/jacket4.jpeg') },

  ]
  render() {
    return (
      <ScrollView  style={styles.container} showsVerticalScrollIndicator={false}>
         <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.firstIcon}>
            <AntDesign name="arrowleft" size={20}  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondIcon}>
            <Feather name="shopping-cart" size={20} />
          </TouchableOpacity>
        </View>
      
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Woman Jacket</Text>
        </View>

          <View style={styles.inputcontainer}>
            <TextInput placeholder="Search Jacket"  placeholderTextColor="#858383" style={styles.searchInput} />
            <Text style={styles.filterText}>Filter</Text>
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
    backgroundColor: "#ddf",
    marginVertical: -80,
  },

  firstIcon: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  secondIcon: {
    position: "absolute",
    right: 0,
    backgroundColor: "white",
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },

  textContainer: {
    marginBottom: 20,
    marginLeft: 20,
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: "blue",
    marginLeft: 15,
  },

  searchInput:{
    backgroundColor: "#ffff",
    height:45,
    marginHorizontal:25,
    borderRadius:10,
    paddingLeft:20,
  },

  filterText:{
    position: "absolute",
    top:10,
    right:50,
    fontSize:15,
    color: "blue",
  },
  
  inputcontainer:{
    marginBottom:20
  },
  iconContainer: {
    flexDirection: "row",
    marginVertical:5,
    marginHorizontal:15
  },

  
})

export default ItemList
