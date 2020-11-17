import React from "react"
import { TouchableOpacity, Text } from "react-native"
import { ButtonAction } from "../interfaces"

interface IButtonProps extends ButtonAction {
  title: any
}

const Button: React.FC<IButtonProps> = ({ toggleModal, title }) => {
  return (
    <TouchableOpacity onPress={toggleModal}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
