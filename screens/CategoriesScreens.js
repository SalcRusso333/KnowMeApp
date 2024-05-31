import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import CategoryGridTile from "../components/CategoryGridTile";


function CategoriesScreen({navigation}) {

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('Profiles' , {
                categoryId: itemData.item.id
            })
        }

        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
        )
    }

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
        />
    )
}


export default CategoriesScreen