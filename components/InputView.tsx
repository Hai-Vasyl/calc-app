import React from "react"
import { View, Text, GestureResponderEvent } from "react-native"
import styles from "../styles/inputview"
import stylesBase from "../styles/base"
import PrimButton from "./PrimButton"

interface IInputViewProps {
  result: number
  input: string
  isLandscape: boolean
  clearOneSumbol(event: GestureResponderEvent): void | undefined
}

const InputView: React.FC<IInputViewProps> = ({
  result,
  input,
  isLandscape,
  clearOneSumbol,
}) => {
  return (
    <>
      <View style={styles.wrapperResult}>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.wrapperDisplay}>
        <Text style={styles.textInput}>{input}</Text>
        <PrimButton
          exStyle={[
            stylesBase.btn,
            stylesBase.btnDel,
            isLandscape && stylesBase.btnLands,
          ]}
          txStyle={isLandscape ? stylesBase.btnTextLands : {}}
          handlePress={clearOneSumbol}
          title='Del'
        />
      </View>
    </>
  )
}

export default InputView
