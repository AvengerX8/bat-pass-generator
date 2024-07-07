import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import { BatInput } from "../../components/BatInput/BatInput";
import generatePassword from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';
import { styles } from './BatButtonStyle';


export function BatButton() {
    const [password, setPassword] = useState('');

    function changePassword(){
        let generatedPassword = generatePassword()
        setPassword(generatedPassword);
    }

    function copyPassword(){
        Clipboard.setStringAsync(password);
        setPassword('');
    }

  return (
    <>
        <BatInput password={password}/>

        <Pressable style={styles.button} onPress={changePassword}>
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>  
        <Pressable style={styles.button} onPress={copyPassword}>
            <Text style={styles.text}>⚡COPY</Text>
        </Pressable>    
    </>
  );
}