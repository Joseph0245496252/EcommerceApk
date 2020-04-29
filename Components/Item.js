import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';


export class Item extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {img} =this.props
        return (
            <View style={styles.container}>

                <View style={styles.ImageContainer}>
                    <Image source={img} style={styles.image} />
                    {/* <View style={styles.backgroundImage}>
                    </View> */}
                </View>

                <View style={styles.infosContainer}>
                    <Text style={styles.title}>{this.props.name} </Text>
                    <Rating
                        onFinishRating={this.ratingCompleted}
                        imageSize={20}
                        style={{ paddingRight:80}}
                        
                    />
                    <Text style={styles.price}>{this.props.price}</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginBottom:10
    },
    ImageContainer:{
        flex:3,
        marginRight:10,
        marginLeft:25
    },
    image:{
        width:120,
        height:120,
    },
    backgroundImage:{
        backgroundColor:"yellow",
        width:100,
        height:100,
    },
    infosContainer:{
        flex:7,
        marginTop:20,
        marginLeft:50,
          
    },
    title:{
        fontWeight:"bold",
        fontSize:14,
        marginBottom:8
    },

    price:{
        fontSize:35,
        color:"#8c07f0",
        fontWeight:"bold",
        marginTop:10
    },



})

export default Item
