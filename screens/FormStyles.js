import {
  StyleSheet
} from "react-native";



const FormStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff",
      minHeight: "100%",
      flexGrow: 1,
    },
    logo: {
      alignItems: "center",
      marginBottom: 40,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius:20,
      boxShadow:'2px 2px #dddddd',
      margin:30
      
      
    },
    inputBox: {
      width: 300,
      backgroundColor: "#B6BFC4",
      borderRadius: 25,
      padding: 16,
      fontSize: 16,
      marginVertical: 10,
      outline:0,
      outlineColor: 0,
      outlineStyle: 'none',
      outlineWidth: 0

    },
    button: {
      width: 300,
      backgroundColor: "#738289",
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "500",
      color: "#ffffff",
      textAlign: "center",
    },
    registerContainer: {
      alignItems: "flex-end",
      justifyContent: "center",
      paddingVertical: 16,
      flexDirection: "row",
    },
    registerText: {
      color: "#738289",
      fontSize: 16,
    },
    registerButton: {
      color: "#738289",
      fontSize: 16,
      fontWeight: "bold",
    },
    error: {
        color: 'red',
        textAlign: 'center'
    },
    warning_wrapper:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    warning_text: {
      fontSize:18,
      margin:30,
      color:"#777777"
    },
    redirect_button:{
      fontSize:40,
      margin:30,
      padding:30,
      borderRadius: 10,
      borderWidth:1,
      borderColor:"#000000"
    },
    noticeText:{
      margin:15
    },
    noticeButton:{
      margin:15
    }
  });

export default FormStyles;