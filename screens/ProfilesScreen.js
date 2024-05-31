import { View, Text, StyleSheet, FlatList } from "react-native";
import { PROFILES } from "../data/dummy_data";
import ProfileItem from "../components/ProfileItem";

function ProfilesScreen({ route }){

    const catId = route.params.categoryId

    const displayedProfiles = PROFILES.filter((profileItem) => {
        return profileItem.categoryIds.indexOf(catId) >= 0
    })
    console.log(displayedProfiles)
    function renderProfileItem(itemData){
        console.log('Render Item', itemData.item.title)
        return(
            <ProfileItem
            name={[itemData.item.name]}
            favcolor={itemData.item.favcolor}
            image={itemData.item.image}
            bio={itemData.item.bio}
            birth={itemData.item.birth}
            />
        )
    }
    return(
        <View style={styles.container}>
            <Text>Profile Overview - {catId}</Text>
            <FlatList
                data={displayedProfiles}
                keyExtractor={(item) => item.id}
                renderItem={renderProfileItem}
            />
        </View>
    )
}

export default ProfilesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})