import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons'
import { Rating } from 'react-native-ratings';


export class ItemLdetails extends Component {

    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.leftIcon}>
                        <AntDesign name="arrowleft" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rightIcon}>
                        <Feather name="shopping-cart" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.heart}>
                        <AntDesign name="hearto" size={20} />
                    </TouchableOpacity>

                </View>

                <View style={styles.ImageContainer}>
                    <Image source={require('../assets/hoodie2.jpg')} style={styles.image} />
                </View>

                <View style={styles.infosContainer}>
                    <Text style={styles.title}>CODETRAIN IS AWESOME </Text>
                    <View style={styles.review} >
                        <Text>Review : </Text>
                        <Rating
                            onFinishRating={this.ratingCompleted}
                            imageSize={20}
                            style={{ paddingRight: 100 }}
                        />
                    </View>
                    <View style={styles.line}></View>

                    <Text style={styles.textDetail}>
                        Quis labore consectetur adipisicing ipsum
                        nulla sint et nostrud deserunt nulla ullamco ea id.
                    </Text>
                    <View style={styles.textDetail2} >
                        <Text style={styles.textColor} >
                            Material: 91% polyester, 9% elastane
                        </Text>
                    </View>

                    <View style={styles.sizeContainer}>
                        <TouchableOpacity style={styles.sizeItem}>
                            <Text style={styles.sizeItemText}> XS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sizeItem}>
                            <Text style={styles.sizeItemText}> S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.sizeItem, styles.activeItem]}>
                            <Text style={[styles.sizeItemText, styles.activeItemFont]}> M</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sizeItem}>
                            <Text style={styles.sizeItemText}> L </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sizeItem}>
                            <Text style={styles.sizeItemText}> XL </Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.cartContainer} >
                            <View style={styles.cartText}> 
                                <Text style={styles.cartTextAmount}>Total Amount</Text>
                                <Text style={styles.cartTextAmount2}>$110</Text>
                            </View>
                            <TouchableOpacity style={styles.AddCartContainer}>
                                    <Text style={styles.AddCartText}>Add to Cart</Text>
                            </TouchableOpacity>
                    </View>
                    
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        backgroundColor: "#ededed",
        marginTop:0
    },
    line:{
        width:60,
        height:8,
        borderRadius:20,
        backgroundColor:"#769ae8",
        marginTop:10
    },
    cartContainer:{
        flexDirection:"row",
        borderRadius:20,
        justifyContent:"space-evenly",
        alignItems:"center",
      height:70,
      backgroundColor:"#769ae8",
      marginBottom:5
    },
    AddCartText:{
        color:"white",
        fontWeight:"bold",
        fontSize:18
    },
    cartText:{
        marginRight:10,
    },
    cartTextAmount:{
        color:"white"
    },
    cartTextAmount2:{
        color:"white",
        fontWeight:"bold",
        fontSize:25
    },
    AddCartContainer:{
        backgroundColor:"#4b5fde",
        height:50,
        width:110,
        alignItems:"center",
        borderRadius:10,
        justifyContent:"center",
        
    },
    infosContainer:{
        marginHorizontal:40
    },
    textDetail2:{
        backgroundColor:"white",
        height:50,
        justifyContent:"center",
        
    },
    sizeContainer: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom:5,
        alignSelf: "center",
        backgroundColor: "#ededed",
        height: 80,
        width: 300,
        justifyContent: "center",
        alignItems: "center"
    },
    activeItem: {
        backgroundColor: "#769ae8"
    },
    activeItemFont: {
        color:"white"
    },
    sizeItem: {
        borderWidth: 0.5,
        borderColor: "gray",
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
        backgroundColor: "white",
        borderRadius: 10

    },
    sizeItemText: {
        fontSize: 18,
        fontWeight: "bold"
    },
    review: {
        flexDirection: "row"
    },
    textDetail: {
        marginVertical: 10,
        fontSize: 16,

    },
    textColor: {
        fontSize: 15,
        color: "blue",
       paddingLeft:10
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    iconContainer: {
        flexDirection: "row",
        marginBottom: 5
    },
    leftIcon: {
        backgroundColor: "white",
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
    },
    rightIcon: {
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
    ImageContainer: {
        alignSelf: "center"
    },
    image: {
        width:250,
        height:200
    },
    heart: {
        position: "absolute",
        top: 60,
        right: 0,
        backgroundColor: "white",
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
    },

})

export default ItemLdetails
