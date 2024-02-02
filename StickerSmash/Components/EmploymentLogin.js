import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { grid } from "../assets/style/gridStyle";
import { styles } from "../assets/style/style";
import { Col, Row } from "../assets/style/rowAndColumn";
import { formStyles } from "../assets/style/fromStyle";
import Footer from "./Footer";

function EmploymentLogin({ navigation }) {
  return (
    <View style={styles.emploaymentExchange}>
      {/* <ImageBackground
        source={{
          uri: "https://kavalarnalantn.in/images/Banner.png",
        }}
        resizeMode="cover"
        style={styles.backImage}
        blurRadius={4}
      > */}
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 50, height: 50 }}
      />
      <View style={styles.app}>
        <View style={styles.homeTitle}>
          <Text style={styles.titleText}>தமிழ்நாடு காவலர் நலன்</Text>
          <Text style={{ color: "white", marginTop: 20 }}>
            Employment Exchange
          </Text>
        </View>
      </View>
      <View style={styles.homeOptions}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View style={styles.dashBoradCard}>
            <View>
              <Text style={styles.cardText}>LOGIN / REGISTER</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CandidateLogin")}>
          <View style={styles.dashBoradCard}>
            <View>
              <Text variant="displayLarge" style={styles.cardText}>
                CANDIDATE LOGIN
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CompanyLogin")}>
          <View style={styles.dashBoradCard}>
            <View>
              <Text variant="displayLarge" style={styles.cardText}>
                COMPANY LOGIN
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {/* </ImageBackground> */}
      <Footer background={"white"} />
    </View>
  );
}
export default EmploymentLogin;
