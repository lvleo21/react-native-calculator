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

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay


        //* Ele verifica se já existe um . no número digitado
        if (value === "." && !clearDisplay && this.state.displayValue.includes(".")) {
            return
        }

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + value
        this.setState({ displayValue, clearDisplay: false })

        if (value !== ".") {
            const newValue = parseFloat(displayValue);

            const values = [...this.state.values]
            values[this.state.currentCursor] = newValue

            this.setState({ values })
        }

    }

    setOperation = (operation) => {

        if (this.state.currentCursor === 0) {
            this.setState({ operation, currentCursor: 1, clearDisplay: true })
        } else {
            const equals = operation === "=";
            const values = [...this.state.values]
            try {
                console.log(`${values[0]} ${this.state.operation} ${values[1]}`)
                values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
            } catch (err) {
                values[0] = this.state.values[0]
            }

            values[1] = 0

            this.setState({
                displayValue: `${values[0]}`,
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })


        }
        console.log(this.state)
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
                    <Button label={"."} onClick={this.addDigit} />
                    <Button label={"="} operations onClick={this.setOperation} />
                </View>
            </>
        )
    }
}

export default Calculator;