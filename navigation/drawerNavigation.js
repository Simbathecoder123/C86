import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from './StackNavigator';
import Profile from "../screens/Profile";   

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <DrawerNavigator>
            <Drawer.Screen name="Home" component={StackNavigator}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </DrawerNavigator>
    );
};

export default DrawerNavigator;