import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            CreatePost: {}
        }
    }
    render() {
        return(
            <View>
                <Text> Profile</Text>
            </View>
        )
    }

}