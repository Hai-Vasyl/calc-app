import React, { useState } from "react"
import { Text, View, Dimensions, Modal } from "react-native"
import styles from "./styles/base"
import MainPage from "./pages/Main"
import AboutPage from "./pages/About"
import Button from "./components/Button"
import { Icon } from "react-native-elements"

const App: React.FC = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  const [input, setInput] = useState("0")
  const [calcStr, setCalcStr] = useState("0")
  const [result, setResult] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)

  const _onLayout = () => {
    setDimensions({
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    })
  }

  const calcResult = (calcStr: string) => {
    try {
      setResult(eval(calcStr))
    } catch (error) {}
  }

  const calculate = (value: string) => {
    let calcVal = value
    let inputVal = value

    if (value === "sqrt") {
      if (calcStr === "0") {
        calcVal = "0**(1/"
        inputVal = "0^(1/"
      } else {
        calcVal = "**(1/"
        inputVal = "^(1/"
      }
    } else if (value === "pow") {
      if (calcStr === "0") {
        calcVal = "0**"
        inputVal = "0^"
      } else {
        calcVal = "**"
        inputVal = "^"
      }
    }

    let newCalcStr = calcStr === "0" ? calcVal : `${calcStr}${calcVal}`
    let inputStr = input === "0" ? inputVal : `${input}${inputVal}`
    setInput(inputStr)
    setCalcStr(newCalcStr)
    calcResult(newCalcStr)
  }

  const clear = () => {
    setInput("0")
    setCalcStr("0")
    setResult(0)
  }

  const toggleModal = () => {
    setModalVisible((prev) => !prev)
  }

  const clearOneSumbol = () => {
    if (input !== "0") {
      let newInput = input
      let newCalcStr = calcStr

      if (input.slice(-4) === "^(1/") {
        newInput = input.slice(0, -4)
        newCalcStr = calcStr.slice(0, -5)
      } else if (input.slice(-1) === "^") {
        newInput = input.slice(0, -1)
        newCalcStr = calcStr.slice(0, -2)
      } else {
        newInput = input.slice(0, -1)
        newCalcStr = calcStr.slice(0, -1)
      }

      let resultCalcStr = newCalcStr
      let resultInput = newInput
      if (!newCalcStr.length) {
        resultInput = resultCalcStr = "0"
      }

      setInput(resultInput)
      setCalcStr(resultCalcStr)
      calcResult(resultCalcStr)
    }
  }

  const isLandscape = dimensions.width > dimensions.height

  return (
    <View style={styles.container} onLayout={_onLayout}>
      <View style={styles.wrapperTitle}>
        <Text style={[styles.title, isLandscape && styles.titleLands]}>
          Calculator
        </Text>
        <Button
          toggleModal={toggleModal}
          title={<Icon style={styles.iconAbout} name='info' color='#517fa4' />}
        />
      </View>
      <MainPage
        result={result}
        input={input}
        isLandscape={isLandscape}
        clearOneSumbol={clearOneSumbol}
        clear={clear}
        calculate={calculate}
      />
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <AboutPage toggleModal={toggleModal} />
      </Modal>
    </View>
  )
}

export default App
