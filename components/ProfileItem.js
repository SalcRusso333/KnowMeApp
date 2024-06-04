import { View, Text, Pressable, Image, Platform, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native";
import ProfileDetails from "./ProfileDetail";
function ProfileItem({id, name, image, color, favcolor, birth}){
    const navigation = useNavigation()

    function selectProfileHandler(){
        navigation.navigate('ProfileDetails', {profileId: id})
    }
    const profileColors = color;
    console.log('Colores en Items: ', profileColors)
    return(
        //Utiliza el arreglo profileColors para elegir entre colores
        <View style={styles.profileItem}>
            <Pressable 
                android_ripple={{ color: '#ccc'}}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={selectProfileHandler} 
            >
                <View>
                    <View>
                        <Image 
                            source={image}
                            style={styles.image}
                        />
                        <Text style={[styles.title, {
                            //Aqui cambias el color de los nombres
                            color: profileColors[1]
                        }]}>
                            {name}
                        </Text>
                    </View>
                    <ProfileDetails
                        profileColors={profileColors}
                        favcolor={favcolor}
                        birth={birth}
                    />
                </View>
            </Pressable>
        </View>
    )
}
export default ProfileItem

const styles = StyleSheet.create({
    profileItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})