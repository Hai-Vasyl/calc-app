import React from "react"
import { View, GestureResponderEvent } from "react-native"
import PrimButton from "../components/PrimButton"
import InputView from "../components/InputView"
import btnData from "../data/buttons"
import styles from "../styles/base"

interface IMainPageProps {
  result: number
  input: string
  isLandscape: boolean
  clearOneSumbol(event: GestureResponderEvent): void | undefined
  clear: any
  calculate: any
}

const Main: React.FC<IMainPageProps> = ({
  result,
  input,
  isLandscape,
  clearOneSumbol,
  clear,
  calculate,
}) => {
  return (
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
              txStyle={[btn.txStyle, isLandscape && styles.btnTextLands]}
              key={btn.title}
              title={btn.title}
            />
          )
        })}
      </View>
    </View>
  )
}

export default Main
