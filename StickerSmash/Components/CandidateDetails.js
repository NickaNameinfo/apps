import React, { useEffect, useState } from "react";
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
import axios from "axios";

function CandidateDetails({ navigation, route }) {
  console.log(route.params, "route.params");
  const { Details } = route.params;
  const [apiDatas, setApiDatas] = useState(null);

  useEffect(() => {
    fetchData();
  }, [Details.userName]);

  const fetchData = async () => {
    try {
      const url = `https://nodebackend.kavalarnalantn.in:5000/job_fair/${Details.userName}`;
      const response = await axios.get(url);
      setApiDatas(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <View style={styles.emploaymentExchange}>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 50, height: 50 }}
      />
      <View style={styles.app}>
        <View style={styles.homeTitle}>
          <Text style={styles.titleText}>தமிழ்நாடு காவலர் நலன்</Text>
        </View>
      </View>
      <View style={styles.homeOptions}>
        {/* {apiDatas?.length === 0 && ( */}
          <TouchableOpacity
            onPress={() => navigation.navigate("ApplyJob", route.params)}
          >
            <View style={styles.dashBoradCard}>
              <View>
                <Text style={styles.cardText}>Apply Job</Text>
              </View>
            </View>
          </TouchableOpacity>
        {/* )} */}

        <TouchableOpacity
          onPress={() => navigation.navigate("ViewJob", route.params)}
        >
          <View style={styles.dashBoradCard}>
            <View>
              <Text variant="displayLarge" style={styles.cardText}>
                View Applied Job
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity>
          <View style={styles.dashBoradCard}>
            <View>
              <Text variant="displayLarge" style={styles.cardText}>
                Nitifications
              </Text>
            </View>
          </View>
        </TouchableOpacity> */}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ViewJob", route.params)}
      >
        <View style={styles.dashBoradCard}>
          <View>
            <Text variant="displayLarge" style={styles.cardText}>
              Notifications
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* </ImageBackground> */}
      <Footer background={"white"} />
    </View>
  );
}
export default CandidateDetails;
