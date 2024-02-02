import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  Button,
  Pressable,
  Alert,
} from "react-native";

import { formStyles } from "../assets/style/fromStyle";
import { styles } from "../assets/style/style";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function CandidateLogin({ navigation }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://nodebackend.kavalarnalantn.in:5000/son_Register/authenticate",
        data
      );
      const params = {
        Details: data,
        apiData: response, // or any other data from the API response
      };
      navigation.navigate("CandidateDetails", params);
    } catch (error) {
      Alert.alert("Username or Password is incorrect");
      console.log("Error:", error);
    }
  };

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
            <Text style={styles.titleText}>Candidate Login</Text>
          </View>

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
            name="userName"
          />
          {errors.userName && (
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
          <View style={styles.center}>
            <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
export default CandidateLogin;
