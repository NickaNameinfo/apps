import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "../assets/style/style";
import Footer from "./Footer";

function HomePage({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        alignContent: "center",
      }}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.HomeHeader}>
          <View style={styles.homeTitle}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#212761" }}
            >
              தமிழ்நாடு காவலர் நலன்
            </Text>
            <Text style={{ marginTop: 10 }}>TAMIL NADU POLICE WELFARE</Text>
          </View>
        </View>

        <View style={styles.homeStyles}>
          <Image
            source={require("../assets/Banner1.jpeg")}
            style={{ width: "100%", height: 200, borderRadius: 10 }}
          />
          <View style={styles.homeOptions}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("EmploymentLogin")}
            >
              <View style={styles.serviceCard}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/services/exchange.png")}
                    style={styles.cardImage}
                  />
                  <Text style={styles.textWhite}> Employment Exchange </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("CanteenDetails")}
            >
              <View style={styles.serviceCard}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/services/canteen.png")}
                    style={styles.cardImage}
                  />
                  <Text style={styles.textWhite}>
                    {" "}
                    Tamil Nadu Police Welfare Canteen
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("CompassinateGround")}
            >
              <View style={styles.serviceCard}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/services/appointment.png")}
                    style={styles.cardImage}
                  />
                  <Text style={styles.textWhite}>
                    {" "}
                    Compassinate Ground Appointment{" "}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Pension")}
            >
              <View style={styles.serviceCard}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/services/retirement.png")}
                    style={styles.cardImage}
                  />
                  <Text style={styles.textWhite}> Pension CMPRF</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("HealthCare")}
            >
              <View style={styles.serviceCard}>
                <View tyle={{ justifyContent: "center", alignItems: "center" }}>
                  <Image
                    source={require("../assets/services/health-insurance.png")}
                    style={styles.cardImage}
                  />
                  <Text style={styles.textWhite}>Health Scheme</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("FundDetails")}
            >
              <View style={styles.serviceCard}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/services/fund.png")}
                    style={styles.cardImage}
                  />
                  <Text style={styles.textWhite}>
                    Tamil Nadu Police Benevolent Fund
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
export default HomePage;
