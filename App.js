import { StyleSheet } from 'react-native'
import CategoriesScreen from "./screens/CategoriesScreens";
import { StatusBar } from 'expo-status-bar';
import ProfileDetailScreen from './screens/ProfileDetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import ProfilesScreen from './screens/ProfilesScreen';

const Stack = createStackNavigator();

export default function App() {

  
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ProfilesCategories" component={CategoriesScreen} />
          <Stack.Screen name="Profiles" component={ProfilesScreen} />
          <Stack.Screen name="ProfileDetails" component={ProfileDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
  },
});
