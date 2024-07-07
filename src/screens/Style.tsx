import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#101010',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoStyle: {
      flexDirection: 'column',
      borderColor: '#E5BF3C',
      borderWidth: 3,
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#202020',
      paddingTop: 20, 
      marginBottom: 60
    },
    inputContainer: {
      width: '70%',
      flexDirection: 'column',
      alignItems: 'center',
    }
  });

export default styles;