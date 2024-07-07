import React from 'react';
import { View, Text, Image } from 'react-native';
import Logo from "../../../assets/batman-logo-2.png"

import { styles } from './BatLogoStyle';

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
        <Image source={Logo} style={styles.img}/>
    </>
  );
}