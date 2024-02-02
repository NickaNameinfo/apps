import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { formStyles } from "../assets/style/fromStyle";
import { styles } from "../assets/style/style";
import { useForm, Controller } from "react-hook-form";

function CompanyLogin({ navigation }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      emailId: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);
  return (
    <View style={styles.flex}>
      <ImageBackground
        resizeMode="repeat"
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
              <Text style={styles.titleText}>Company Login</Text>
            </View>
            <View
              style={{
                backgroundColor: "#ffffff3b",
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Email Id"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    placeholder="Enter your Username"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="emailId"
              />
              {errors.emailId && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <View>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      label="Password"
                      secureTextEntry={!isPasswordVisible}
                      style={styles.inputBox}
                      underlineColor="transparent"
                      placeholder="Enter your Password"
                      mode="outlined"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="password"
                />

                {/* IconButton to toggle between hide/show password */}
                <FontAwesome
                  style={{
                    position: "absolute",
                    right: 8,
                    top: 18,
                    fontSize: 20,
                  }}
                  name={isPasswordVisible ? "eye-slash" : "eye"}
                  // icon={isPasswordVisible ? "eye-off" : "eye"}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              </View>
              {errors.password && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <View style={formStyles.flexRow}>
                <Text
                  variant="titleSmall"
                  style={styles.forgetText}
                  onPress={() => navigation.navigate("ForgetUsername")}
                >
                  Forget UserName?
                </Text>
                <Text
                  variant="titleSmall"
                  style={styles.forgetText}
                  onPress={() => navigation.navigate("ForgetPassword")}
                >
                  Forget Password?
                </Text>
              </View>
            </View>
            <View style={styles.center}>
              <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Submit</Text>
              </Pressable>
            </View>
            <View>
              <Text variant="titleSmall" style={styles.signup}>
                Don't have an account?
              </Text>
              <Text
                style={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: 14,
                  marginLeft: 10,
                  textAlign: "center",
                }}
                onPress={() => navigation.navigate("CompanyRegister")}
              >
                Register
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
export default CompanyLogin;
