import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import {DropDownPicker} from "react-native-dropdown-picker"
import { RFValue } from "react-native-responsive-fontsize";

export default class CreatePost extends Component{
    constructor(props){
        super(props);
        this.state={
            CreatePost: {},
            PreviewImage: {}
        }
    }
    render() {
        return(
            <View style={StyleSheet.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image 
                        source={require("../assets/assets/logo.png")}
                        style={styles.iconImage}></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>New Post</Text>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <ScrollView>
                        <Image
                        source={preview_images[this.state.preview_images]}
                        style={styles.previewImage}
                        ></Image>
                        <View style={{ height:
                                        RFValue(this.state.dropdownHeight)}}>
                        <DropDownPicker/>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }

}