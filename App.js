import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer, CommonActions} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';

import Home from "./screens/Home";
import Setting from "./screens/Setting";
import Score from './screens/Score';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Setting}/>
            <Tab.Screen name="Score" component={Score}/>
        </Tab.Navigator>
    )
}

const Drawer = createDrawerNavigator();
function DrawerNavigator({navigation}) {
    return (
        <Drawer.Navigator initialRouteName="MenuTab">
            <Drawer.Screen name="MenuTab" component={TabNavigator}/>
        </Drawer.Navigator>
    )
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="分數設定" component={Home}/>
                <Stack.Screen name="分數表" component={Setting}/>
                <Stack.Screen name="分數記錄" component={Score}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;