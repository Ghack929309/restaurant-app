import { StatusBar } from 'expo-status-bar';
import Header from "./src/components/Header"
import {View } from 'react-native';
import Search from "./src/components/Search";
import {useState} from "react";
import Categories from "./src/components/Categories";
import Restaurants from "./src/components/Restaurants";

export default function App() {
  const [term,setTerm]=useState('Burger')
  return (
    <View >
    <Header/>
      <Search setTerm={setTerm}/>
      <Categories term={term} setTerm={setTerm}/>
      <Restaurants term={term}/>
      <StatusBar style="auto" />
    </View>
  );
}


