import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { styles } from "../assets/style/style";

function PostJobs({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#212761",
      }}
    >
      <ImageBackground
        // source={{ uri: "https://kavalarnalantn.in/images/Banner.png" }}
        resizeMode="repeat"
        style={styles.backImage}
      >
        <ScrollView>
          <View style={styles.card}>
            <View>
              <View style={styles.center}>
                <Image
                  style={styles.image}
                  source={require("../assets/logo.png")}
                />
                <Text style={styles.titleText}>Post Jobs</Text>
              </View>

              <TextInput
                label="Company / Organization Name"
                placeholder="Company / Organization Name"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Contact Person Name"
                placeholder="Contact Person Name"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Phone Number"
                placeholder="Phone Number"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                placeholder="Email-Id"
                label="Email-Id"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="GST / PAN No"
                placeholder="GST / PAN No"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Upload GST Document"
                placeholder="Upload GST Document"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="UserName"
                placeholder="UserName"
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <TextInput
                label="Password"
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
                underlineColor="transparent"
                mode="outlined"
              />
              <View style={styles.center}>
                <Pressable
                  style={styles.button}
                  onPress={() => navigation.navigate("HomePage")}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default PostJobs;
