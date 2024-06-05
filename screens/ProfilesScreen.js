import { View, Text, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import { PROFILES, CATEGORIES } from "../data/dummy_data";
import ProfileItem from "../components/ProfileItem";
import Profile from "../models/profile";

function ProfilesScreen({ route, navigation }) {
    const catId = route.params.categoryId;
    const displayedProfiles = PROFILES.filter((profileItem) => {
        return profileItem.categoryIds.indexOf(catId) >= 0;
    });
        console.log(displayedProfiles);
    const profileColors = displayedProfiles.map(profile => profile.color);
    const flatColors = profileColors.flat() 

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        //AQUI VAS A ELEGIR EL COLOR DE LA STATUS BAR, cambia el arreglo flatColors de ahí abajo
        navigation.setOptions({
            title: categoryTitle,
            headerStyle: { backgroundColor: flatColors[5]},
        })
    }, [catId, navigation])

    function renderProfileItem(itemData) {
        console.log("Colores: ", profileColors)
        console.log("Color 1: ", profileColors[0][1])
        console.log('colores reducidos: ', flatColors)
        return (
            <ProfileItem
                id={itemData.item.id}
                name={itemData.item.name}
                favcolor={itemData.item.favcolor}
                image={itemData.item.image}
                birth={itemData.item.birth}
                color={itemData.item.color}
            />
        );
    }
    return (
        <View style={[styles.container,{
                //Aqui cambias el color del fondo cuando quieras usar los colores, estan guardados en el arreglo flatColors
             backgroundColor: flatColors[0]
             }]}>
            <Text>Profile Overview - {catId}</Text>
            <FlatList
                data={displayedProfiles}
                keyExtractor={(item) => item.id}
                renderItem={renderProfileItem}
            />
        </View>
    );
}

export default ProfilesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});