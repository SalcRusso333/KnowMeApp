import { View, Text, Pressable, Image, Platform, StyleSheet } from "react-native"

function ProfileItem({name, image, bio, favcolor, birth}){
    return(
        <View style={styles.profileItem}>
            <Pressable 
                android_ripple={{ color: '#ccc'}}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null) } 
            >
                <View>
                    <View>
                        <Image 
                            source={image}
                            style={styles.image}
                        />
                        <Text style={styles.title}>
                            {name}
                        </Text>
                        <Text style={styles.title}>Cumpleaños: {birth}</Text>
                        <Text style={styles.title}>Color favorito: {favcolor}</Text>
                        <Text>
                            {bio}
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}
export default ProfileItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor:'white',
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
        height: 300
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