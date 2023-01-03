import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class PostScreen extends Component{
 
    renderItem = ({item:post}) => {
        return <PostCard post={post} navigation={this.props.navigation} />
    }
};