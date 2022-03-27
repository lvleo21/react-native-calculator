import react from "react";
import {
    StyleSheet, Text, View, Dimensions, TouchableHighlight
} from "react-native"
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


const styles = (col) => StyleSheet.create({
    btn: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: (Dimensions.get('window').width / 4) * col,
        padding: 20,
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#888"
    },
    operationBtn: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
})

const Button = (props) => {

    const styleSheet = styles(props.cols || 1)

    let btnStyle = [styleSheet.btn]

    if (props.operations) {
        btnStyle.push(styleSheet.operationBtn)
    }

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={ btnStyle }>{props.label}</Text>
        </TouchableHighlight>
    )
}

export default Button;