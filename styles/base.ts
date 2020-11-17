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
  wrapperTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "lightgrey",
  },
  iconAbout: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "lightgrey",
    fontWeight: "bold",
    borderColor: "grey",
  },
  titleLands: {
    fontSize: 15,
    paddingVertical: 5,
  },
  btn: {
    width: "25%",
  },
  btnText: {
    color: "red",
  },
  btnLands: {
    paddingVertical: 0,
    color: "red",
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
