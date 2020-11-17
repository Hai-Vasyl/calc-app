import { GestureResponderEvent } from "react-native"

export interface ButtonAction {
  toggleModal(event: GestureResponderEvent): void | undefined
}
