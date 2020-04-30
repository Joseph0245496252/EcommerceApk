import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons'
import { Rating } from 'react-native-ratings';


export class ItemDetails extends Component {

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
                    <Image source={require('../assets/jacket3.jpg')} style={styles.image} />
                </View>

                <View style={styles.infosContainer}>
                    <Text style={styles.title}>Wonder Woman Jacket</Text>
                    <View style={styles.review} >
                        <Text>Review : </Text>
                        <Rating
                            onFinishRating={this.ratingCompleted}
                            imageSize={15}
                            style={{ paddingRight: 100 }}
                        />
                    </View>
                    <View style={styles.line}></View>

                    <Text style={styles.textDetail}>
                        God is good all the time and all the time God is good
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
        backgroundColor: "#ddf",
        marginVertical: -80,
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


    ImageContainer: {
        alignSelf: "center"
    },

    image: {
        width:240,
        height:200,
    },

    infosContainer:{
        marginHorizontal:30,
    },

    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },

    review: {
        flexDirection: "row"
    },

    line:{
        width:60,
        height:5,
        borderRadius:20,
        backgroundColor:"#769ae8",
        marginTop:10
    },

    textDetail: {
        marginVertical: 10,
        fontSize: 16,

    },

    textDetail2:{
        backgroundColor:"white",
        height:50,
        justifyContent:"center",
        marginHorizontal:-27,
    },

    textColor: {
        fontSize: 15,
        color: "blue",
       paddingLeft:10,
       alignSelf: "center",
       backgroundColor: "#c8c9c1"
    },

    sizeContainer: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom:5,
        alignSelf: "center",
        backgroundColor: "#ededed",
        height: 50,
        width: 250,
        justifyContent:"space-evenly",
        alignItems: "center",
    },

    sizeItem: {
        borderColor: "gray",
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
        backgroundColor: "white",
        borderRadius: 5

    },
    sizeItemText: {
        fontSize: 10,
        fontWeight: "bold"
    },

    cartContainer:{
        flexDirection:"row",
        borderRadius:10,
        justifyContent:"space-evenly",
        alignItems:"center",
      height:60,
      backgroundColor:"#769ae8",
      marginTop:10,
      marginBottom:100
    },

    AddCartText:{
        color:"white",
        fontWeight:"bold",
        fontSize:15
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
        fontSize:20,
        marginLeft:20
    },

    AddCartContainer:{
        backgroundColor:"blue",
        height:40,
        width:100,
        alignItems:"center",
        borderRadius:10,
        justifyContent:"center",
        marginLeft:50  
    },
    
    activeItem: {
        backgroundColor: "blue",
        
    },
    activeItemFont: {
        color:"white"
    },
    
})

export default ItemDetails;
