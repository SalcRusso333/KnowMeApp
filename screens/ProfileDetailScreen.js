import { ScrollView, StyleSheet, View, Image, Text } from "react-native"
import { PROFILES } from "../data/dummy_data"
import ProfileDetails from "../components/ProfileDetail"
import { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"

function ProfileDetailScreen({route}){
    const navigation = useNavigation();
    const profileId = route.params.profileId

    const selectedProfile = PROFILES.find((profile) => profile.id === profileId)

    useLayoutEffect(() => {
        //AQUI VAS A ELEGIR EL COLOR DE LA STATUS BAR, cambia el arreglo flatColors de ahí abajo
        navigation.setOptions({
            title: 'Detalles',
            headerStyle: { backgroundColor: selectedProfile.color[6]},
        })
    }, [profileId, navigation])

    return(
        <ScrollView style={[{
            backgroundColor: selectedProfile.color[0]
        }]}
        >
            <Image 
                            source={selectedProfile.image}
                            style={styles.image}
                        />
                        <Text style={[styles.title, {
                            //Aqui cambias el color de los nombres
                            color: selectedProfile.color[1]
                        }]}>
                            {selectedProfile.name}
                        </Text>
                        <View>
                           <ProfileDetails
                            profileColors={selectedProfile.color}
                            favcolor={selectedProfile.favcolor}
                            birth={selectedProfile.birth}
                            /> 
                        </View>
                        <Text style={[styles.detailItem, {
                            color: selectedProfile.color[4],
                            fontSize: 18,
                            paddingLeft:15,
                            paddingRight: 15
                        }]}>{selectedProfile.bio}</Text>

                        
                        
        </ScrollView>
    )
}
export default ProfileDetailScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 4,
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        textAlign: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    textContent: {
        fontSize: 14,
        margin: 4,
        marginVertical: 3,
        marginHorizontal: 24    
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
    

})