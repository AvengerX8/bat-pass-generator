import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from "../screens/Style"
import { BatLogo } from "../components/BatLogo/BatLogo";
import { BatButton } from "../components/BatButton/BatButton";

export default function Home(){
    return(
    <View style={styles.appContainer}>
        <View style={styles.logoStyle}>
            <BatLogo/>
        </View>

        <View style={styles.inputContainer}>
            <BatButton/>
        </View>
        <StatusBar style="light" />
    </View>
    )
}