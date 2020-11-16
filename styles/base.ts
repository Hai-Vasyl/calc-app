import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  wrapperBtns: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderTopWidth: 1,
    borderColor: "lightgrey",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    paddingVertical: 20,
    backgroundColor: "whitesmoke",
    shadowColor: "lightgrey",
    shadowRadius: 15,
    color: "lightgrey",
    fontWeight: "bold",
  },
  titleLands: {
    fontSize: 15,
    paddingVertical: 5,
  },
  btn: {
    width: "25%",
  },
  btnLands: {
    paddingVertical: 0,
  },
  btnTextLands: {
    fontSize: 15,
  },
  btnDel: {
    borderLeftWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#fff",
  },
  highlightBtn: {
    backgroundColor: "whitesmoke",
  },
})
