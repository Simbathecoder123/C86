import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class Feed extends Component{
    constructor(props){
        super(props);
        this.state={
            CreatePost: {}
        }
    }
    render() {
        return(
            <View>
                <Text> Feed</Text>
            </View>
        )
    }

}