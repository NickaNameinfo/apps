import React from "react";
import { grid } from "../assets/style/gridStyle";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { Col, Row } from "../assets/style/rowAndColumn";
import { styles } from "../assets/style/style";

function Dashboard({ navigation }) {
  return (
    <View style={[styles.flex]}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.center}>
          <Image
            style={styles.image}
            source={require("../assets/logo.png")}
          />
        </View>
        <Row>
          <Col numRows={2}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CandidateRegister")}
            >
              <View style={styles.dashBoradCard}>
                <View>
                  <Text variant="displayLarge" style={styles.cardText}>
                    Employment Exchange
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Col>
          <Col numRows={2}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CandidateRegister")}
            >
              <View style={styles.dashBoradCard}>
                <View>
                  <Text variant="displayLarge" style={styles.cardText}>
                    Tamil Nadu Police Welfare Canteen
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Col>
        </Row>
        <Row>
          <Col numRows={2}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CandidateRegister")}
            >
              <View style={styles.dashBoradCard}>
                <View>
                  <Text variant="displayLarge" style={styles.cardText}>
                    Compassinate Ground Appointment
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Col>
          <Col numRows={2}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CandidateRegister")}
            >
              <View style={styles.dashBoradCard}>
                <View>
                  <Text variant="displayLarge" style={styles.cardText}>
                    Pension & CMPRF
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Col>
        </Row>
        <Row>
          <Col numRows={2}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CandidateRegister")}
            >
              <View style={styles.dashBoradCard}>
                <View>
                  <Text variant="displayLarge" style={styles.cardText}>
                    Health Scheme
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Col>
          <Col numRows={2}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CandidateRegister")}
            >
              <View style={styles.dashBoradCard}>
                <View>
                  <Text variant="displayLarge" style={styles.cardText}>
                    Tamil Nadu Police Benevolent Fund
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Col>
        </Row>
        <View style={styles.center}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Text style={styles.buttonText}>LogOut</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Dashboard;
