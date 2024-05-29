import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy_data";
import MealItem from "../components/MealIItem";

function MealsOverviewScreen({ route }){

    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })
    console.log(displayedMeals)
    function renderMealItem(itemData){
        console.log('Render Item', itemData.item.title)
        return(
            <MealItem
            title={[itemData.item.title]}
            />
        )
    }
    return(
        <View style={styles.container}>
            <Text>Meals Overview - {{catId}}</Text>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})