import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { Text, View, Dimensions } from "react-native"
import PrimButton from "./components/PrimButton"
import styles from "./styles/base"
import InputView from "./components/InputView"
import btnData from "./data/buttons"

const App: React.FC = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  const [input, setInput] = useState("0")
  const [result, setResult] = useState(0)

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
    const calcStr = input === "0" ? value : `${input}${value}`
    setInput(calcStr)
    calcResult(calcStr)
  }

  const clear = () => {
    setInput("0")
    setResult(0)
  }

  const clearOneSumbol = () => {
    if (input !== "0") {
      const calcStr = input.slice(0, -1)
      const result = calcStr.length ? calcStr : "0"
      setInput(result)
      calcResult(result)
    }
  }

  const isLandscape = dimensions.width > dimensions.height

  return (
    <View style={styles.container} onLayout={_onLayout}>
      <Text style={[styles.title, isLandscape && styles.titleLands]}>
        Calculator
      </Text>
      <View>
        <InputView
          result={result}
          input={input}
          isLandscape={isLandscape}
          clearOneSumbol={clearOneSumbol}
        />
        <View style={styles.wrapperBtns}>
          {btnData.map((btn) => {
            return (
              <PrimButton
                handlePress={() =>
                  btn.title === "C" ? clear() : calculate(btn.title)
                }
                exStyle={[
                  styles.btn,
                  btn.exStyle,
                  isLandscape && styles.btnLands,
                ]}
                txStyle={isLandscape ? styles.btnTextLands : {}}
                key={btn.title}
                title={btn.title}
              />
            )
          })}
        </View>
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

export default App
