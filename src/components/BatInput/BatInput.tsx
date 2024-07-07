import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatInputStyle';

interface BatInputProps {
    password : string;
}

export function BatInput(props : BatInputProps) {
  return (
        <TextInput style={styles.input} placeholder='Password' value={props.password}/>
  );
}