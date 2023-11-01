import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../../screens/HomeScreen/HomeScreen"
import SettingsScreen from "../../screens/SettingsScreen/SettingsScreen"
import { View, Image } from "react-native"
import { StackHomeNavigator } from "../stackHomeNavigator/StackHomeNavigator"


const Tab = createBottomTabNavigator()

export const BottomTabNavigator = ({navigation}) => {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "green",
            tabBarIcon: ({size,color,focused}) => {
                let BarIcon

                if(route.name === "Home") BarIcon = require("../../assets/navigationItems/home.png")
                if(route.name === "Settings") BarIcon = require("../../assets/navigationItems/settings.png")

                return (
                    <View>
                        <Image source={BarIcon} style={{
                            resizeMode: "contain",
                            width: 25,
                            height: 25,
                            tintColor: focused ? "red" : "green",
                        }}/>
                    </View>
                )
            } 
        })}>
            <Tab.Screen name="Home" component={StackHomeNavigator}></Tab.Screen>
            <Tab.Screen name="Settings" component={SettingsScreen}></Tab.Screen>
            
        </Tab.Navigator>
    )
}