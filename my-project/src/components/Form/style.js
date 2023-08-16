import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    Form:{
        alignItems: 'start',
        justifyContent: 'center',
        padding: 20,
        paddingTop: 130,
    },
  
    // Text: Altura
    textHeigth:{
    fontSize: 17,
    marginLeft: 2,
    color: 'white',
    marginTop: 10,
    },

    //Input: Altura
    textInput2: {
      borderBottomWidth:  0.9,  
      borderBottomColor: '#969a92', 
      padding: 10,
      width: 370,
      height: 45,
      marginLeft: -10,
    },

    //Text: Peso
    textWeigth:{
        fontSize: 17,
        marginLeft: 2,
        marginTop: 10,
        color: 'white',
    },
      
    //Input: Peso
    textInput3: {
        borderBottomWidth: 0.9,  
        borderBottomColor: '#969a92', 
        padding: 10,
        width: 370,
        height: 45,
        marginLeft: -10,
    },

    
    buttonText: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        backgroundColor: 'black',
        top: 20,
        borderRadius: 20
    },
    errorMessage:{
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 2,
    },
    
      header: {
        flex: 1,
        backgroundColor: "#333",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
      },
      headerText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
      },
  },
);

export default styles