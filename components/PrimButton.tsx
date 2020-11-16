import React from "react"
import { Text, TouchableOpacity, GestureResponderEvent } from "react-native"
import styles from "../styles/primbutton"

interface IPrimButtonProps {
  handlePress(event: GestureResponderEvent): void | undefined
  title: string
  exStyle?: { [key: string]: any }
  txStyle?: { [key: string]: any }
}

const PrimButton: React.FC<IPrimButtonProps> = ({
  handlePress,
  title,
  exStyle,
  txStyle,
}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.wrapper, exStyle]}>
      <Text style={[styles.title, txStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default PrimButton
