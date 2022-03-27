import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Button from '../Button/';
import Display from '../Display/';


const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
})

const initialState = {
    displayValue: "0",
    clearDisplay: false, //precisa limpar o display ao pressionar próximo valor ?
    operation: null,
    values: [0, 0],
    currentCursor: 0
}

class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = { ...initialState }
    }

    addDigit = (value) => {

        //* Ele verifica se já existe um . no número digitado
        if (value === "." && this.state.displayValue.includes(".")) {
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + value
        this.setState({ displayValue, clearDisplay: false })

        if (value !== "."){
            const newValue = parseFloat(displayValue);

            const values = [...this.state.values]
            values[this.state.current] = newValue

            this.setState({values})
        }

    }

    setOperation = (operation) => {
        ;
    }

    clearMemory = () => {
        this.setState({ ...initialState })
    }

    render() {
        return (
            <>
                <Display value={this.state.displayValue} />

                <View style={styles.btnContainer}>
                    <Button label={"AC"} cols={3} onClick={this.clearMemory} />
                    <Button label={"/"} onClick={this.setOperation} operations />
                    <Button label={"7"} onClick={this.addDigit} />
                    <Button label={"8"} onClick={this.addDigit} />
                    <Button label={"9"} onClick={this.addDigit} />
                    <Button label={"*"} onClick={this.setOperation} operations />
                    <Button label={"4"} onClick={this.addDigit} />
                    <Button label={"5"} onClick={this.addDigit} />
                    <Button label={"6"} onClick={this.addDigit} />
                    <Button label={"-"} onClick={this.setOperation} operations />
                    <Button label={"1"} onClick={this.addDigit} />
                    <Button label={"2"} onClick={this.addDigit} />
                    <Button label={"3"} onClick={this.addDigit} />
                    <Button label={"+"} onClick={this.setOperation} operations />
                    <Button label={"0"} cols={2} onClick={this.addDigit} />
                    <Button label={"."} onClick={this.addDigit}/>
                    <Button label={"="} operations />
                </View>
            </>
        )
    }
}

export default Calculator;