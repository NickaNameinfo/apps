import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import ForgetPassword from "./Components/ForgetPassword";
import ForgetUsername from "./Components/ForgetUsername";
import Register from "./Components/Register";
import CandidateLogin from "./Components/CandidateLogin";
import CompanyLogin from "./Components/companyLogin";
import CompanyRegister from "./Components/CompanyRegister";
import CandidateRegister from "./Components/CandidateRegister";
import PostJobs from "./Components/PostJobs";
import ApplyJob from "./Components/ApplyJob";
import ViewJob from "./Components/ViewJob";

import { useState } from "react";
import Footer from "./Components/Footer";
import EmploymentLogin from "./Components/EmploymentLogin";
import MenuBar from "./Components/MenuBar";
import CanteenDetails from "./Components/DashBoardDetail/CanteenDetails";
import DownloadPDF from "./Components/Download/DownloadPDF";
import CompassinateGround from "./Components/DashBoardDetail/CompassinateGround";
import Pension from "./Components/DashBoardDetail/Pension";
import FundDetails from "./Components/DashBoardDetail/FundDetails";
import HealthCare from "./Components/DashBoardDetail/HealthCare";
import CandidateDetails from "./Components/CandidateDetails";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            title: "",
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
            headerLeft: () => (
              <View>
                <MenuBar />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ForgetUsername"
          component={ForgetUsername}
          options={{
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="CompanyLogin"
          component={CompanyLogin}
          options={{
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="CompanyRegister"
          component={CompanyRegister}
          options={{
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="PostJobs"
          component={PostJobs}
          options={{
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="CandidateLogin"
          component={CandidateLogin}
          options={{
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="CandidateRegister"
          component={CandidateRegister}
          options={{
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ApplyJob"
          component={ApplyJob}
          options={{
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ViewJob"
          component={ViewJob}
          options={{
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="EmploymentLogin"
          component={EmploymentLogin}
          options={{
            title: "Employment Exchange",
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="CanteenDetails"
          component={CanteenDetails}
          options={{
            title: "Welfare Canteen",
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="FundDetails"
          component={FundDetails}
          options={{
            title: "Tamil Nadu Police Benevolent fund",
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="DownloadPDF"
          component={DownloadPDF}
          options={{
            title: "Download",
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="CompassinateGround"
          component={CompassinateGround}
          options={{
            title: "Compassinate Ground Appoinment",
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Pension"
          component={Pension}
          options={{
            title: "Pension CMPRF",
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="HealthCare"
          component={HealthCare}
          options={{
            title: "Health Care",
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="CandidateDetails"
          component={CandidateDetails}
          options={{
            title: "Details",
            headerRight: () => (
              <Image
                source={require("./assets/logo.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
