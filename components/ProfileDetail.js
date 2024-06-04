import { View, Text, StyleSheet } from 'react-native'

function ProfileDetails({birth, favcolor, profileColors}){
    return(
        <View>
            <Text style={[styles.title,{
                color: profileColors[2]
            }]}>{birth}</Text>
            <Text style={[styles.title, {
                color: profileColors[3]
            }]}>{favcolor}</Text>
        </View>
    )
}
export default ProfileDetails

const styles = StyleSheet.create({
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