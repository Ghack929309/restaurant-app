import {Text, View, StyleSheet, ActivityIndicator, FlatList} from 'react-native'
import {useEffect} from "react";
import useRestaurants from "../hook/useRestaurants";
import RestaurantItem from "./RestaurantItem";

export default function Restaurants({term}){
const[{data,loading,error},searchResults]=useRestaurants()
    useEffect(()=>{
        searchResults(term)
    },[term])
    if(loading) return <ActivityIndicator size="large" marginHorizontal={30}/>
    if(error)return(
        <View style={styles.container}>
            <Text style={styles.header}>
                {error}
            </Text>
        </View>
    )
    return(
        <View style={styles.container}>
            <Text style={styles.header}>
                Top Restaurants </Text>
                <FlatList data={data}
                          keyExtractor={item=> item.image.url}
                          renderItem={(item)=>{
                              return(
                              <RestaurantItem restaurant={item}/>)
                          }}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginHorizontal:25,
        marginVertical:15,
    },
    header:{
        fontWeight:'bold',
        fontSize:20,
        paddingBottom:10,
    }
})