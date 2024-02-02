import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { styles } from "../assets/style/style";

function ForgetPassword({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#212761",
      }}
    >
      <View style={styles.card}>
        <View>
          <View style={styles.logoStyle}>
            <Image
              style={styles.image}
              source={require("../assets/logo.png")}
            />
            <Text style={styles.titleText}>Employee Login</Text>
          </View>

            <TextInput
              label="Mobile Number"
              placeholder="Enter your Mobile Number"
              style={styles.inputBox}
              keyboardType="numeric"
              underlineColor="transparent"
              mode="outlined"
            />
            <View style={styles.center}>
              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.buttonText}>Send OTP</Text>
              </Pressable>
            </View>
            <View>
              <Text variant="titleSmall" style={styles.signup}>
                <Text
                  style={{ color: "white", fontWeight: "700" }}
                  onPress={() => navigation.navigate("Login")}
                >
                  Back
                </Text>
              </Text>
            </View>
          </View>
        </View>
    </View>
  );
}
export default ForgetPassword;
