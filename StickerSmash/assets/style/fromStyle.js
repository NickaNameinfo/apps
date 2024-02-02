import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({
  flexColumn: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f6f6f6",
  },
  alignItemCenter: {
    alignItems: "center",
  },
  steperWidth: {
    width: 280,
    height: 30,
  },
  steperBorder: {
    height: 2,
    backgroundColor: "#7C2927",
    width: 180,
    position: "absolute",
    top: 13,
    zIndex: 10,
  },
  steperCountList: {
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    zIndex: 20,
  },
  steperlistWidth: {
    alignItems: "center",
    width: 70,
  },
  steperunChecked: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#7C2927",
    borderRadius: 15,
  },
  stepeChecked: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    backgroundColor: "#0faf9a",
    borderWidth: 2,
    borderColor: "#0faf9a",
    borderRadius: 15,
  },
  stepSelected: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    backgroundColor: "#7C2927",
    borderWidth: 2,
    borderColor: "#7C2927",
    borderRadius: 15,
  },

  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
  },
  signOut: {
    width: 80,
    height: 35,
    backgroundColor: "#7C2927",
    elevation: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
  },
  nextStep: {
    right: 0,
    width: 80,
    height: 35,
    backgroundColor: "#7C2927",
    elevation: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
  },
  prevStep: {
    left: 0,
    width: 80,
    height: 35,
    backgroundColor: "#7C2927",
    elevation: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
  },
  setps: {
    alignItems: "center",
    width: 70,
  },
});
