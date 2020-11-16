import { StyleSheet } from "react-native"

export default StyleSheet.create({
  wrapperDisplay: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "whitesmoke",
  },
  textInput: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    maxHeight: 63,
    overflow: "scroll",
  },
  wrapperResult: {
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    marginBottom: 20,
    fontSize: 25,
  },
})
