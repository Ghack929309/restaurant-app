import {Image, View,Text,StyleSheet} from "react-native";
import {elevation} from "../common/style";


export default function RestaurantItem({restaurant}){
    return(
        <View style={[styles.elevation,styles.container]}>
            <Image style={styles.image} source={{uri:restaurant.item.image.url}}/>
            <View style={styles.infoContainer}>
                <Text style={styles.header}>{restaurant.item.source.name}</Text>
                <View style={styles.info}>
                    <Text style={styles.rating}>4,5</Text>
                    <Text style={styles.price}>$5</Text>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    elevation,
    container: {
        backgroundColor:'white',
        height:100,
        alignSelf:'stretch',
        marginVertical:10,
        borderRadius:50,
        flexDirection:'row',
        alignItems:'center'
    },
    image:{
        width:75,
        height:75,
        borderRadius:50,
        marginLeft:10
    },
    infoContainer:{
        flex:1,
        paddingHorizontal:10
    },
    header:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:4
    },
    info:{
        flexDirection:'row'
    },
    rating: {
        marginRight:20
    },
    price: {
        color:'orange'
    }
})