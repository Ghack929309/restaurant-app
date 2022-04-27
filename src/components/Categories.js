import {FlatList,View} from "react-native";
import {commonCategories} from "../common/commonCategories";
import CategoryItem from "./CategoryITem";

export default function Categories({term, setTerm}){
    return(
        <View>
        <FlatList data={commonCategories} renderItem={({item,index})=> {
            return(<CategoryItem name={item.name}
                                 active={item.name===term}
                                 url={item.imageUrl}
                                 index={index}
                                 handlePress={()=>setTerm(item.name)}
            />)
        }}
                  keyExtractor={(cat)=>cat.name}
                  horizontal
                  showsHorizontalScrollIndicator={false}
        />
        </View>
    )
}