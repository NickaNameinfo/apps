import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Linking,
} from "react-native";
import { styles } from "../../assets/style/style";
import { EvilIcons } from "@expo/vector-icons";
import Footer from "../Footer";

function CanteenDetails({ navigation }) {
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
              தமிழ்நாடு காவல் அங்காடிகள்
            </Text>
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <FlatList
            data={[
              {
                key: "காவலர் நல அங்காடிகள் தமிழ்நாடு அரசாணை எண். 125 (உள்) காவல் 13, நாள் 21.02.2022ன் படி உருவாக்கப்பட்டது .",
              },
              {
                key: "தமிழக அரசு சார்பில் 56 காவலர் அலகு அங்காடிகள் மற்றும் 7 கண்காணிப்பு அங்காடிகள் துவங்கப்பட்டுள்ளன.",
              },
              {
                key: "தமிழ்நாடு காவல் அங்காடியில் காவல்துறையைச் சேர்ந்த அலுவலர்கள் மற்றும் அமைச்ச பணியாளர்கள், சிறைத்துறை, தீயணைப ்பு மற்றும் வனத்துறையில் பணிபுரியும் சீருடை அலுவலர்கள் பயனாளர்கள் ஆவர்.",
              },
              {
                key: "காவல்துறையைச் சேர்ந்த அலுவலர்கள் மற்றும் பணியாளர்கள், சிறைத்துறை, தீயணைப்பு மற்றும் மீட்புப்பணித்துறை மற்றும் வனத்துறையில் பணிபுரியும் சீருடை அலுவலர்கள், ஓய்வு பெற்ற அலுவலர்கள் மற்றும் அவர்களது குடும்பத்தினர்களுமாக மொத்தம் 180550 ( காவல் துறை – 158044, தீயணைப்பு மற்றும் மீட்புப்பணிகள் துறை – 8786, சிறைத்துறை – 5878, வனத்துறை – 7842) பயனாளிகள் தமிழ்நாடு காவல் அங்காடியில் சேர்ந்து பயனடைந்து வருகின்றனர்.",
              },
              {
                key: "நுகர்வோர் பொருட்கள்/வீட்டு உபயோக பொருட்கள்/மின்னனு மற்றும் மின்சாதனம், மளிகை பொருட்கள் உள்ளிட்ட 10,000 பொருட்கள் குறைந்த விலையில் பயனாளருக்கு விற்பனை செய்யப்படுகின்றன.",
              },
              {
                key: "தமிழ்நாடு அரசு அரசாணை எண் 125 உள் காவல் 13 நாள் 21.02.2011 மூலமாகத் தமிழ்நாடு காவலர் அங்காடி வழங்கப்படும் பொருட்கள் 14.5 சதவீதம் மதிப்புக் கூட்டு வரி ரத்து செய்யப்பட்டதால் அந்த பயன் காவல் துறை பயனாளிகளைச் செ ன்றடைந்தது.",
              },
              {
                key: "சரக்கு மற்றும் சேவை வரி அமலாக்கப்பட்ட 01.07.2017 முதல் வரி விலக்கு வழங்கப்படவில்லை. நிறுவனங்களால் வழங்கப்படும் தள்ளுபடி மட்டுமே பயனாளிகளுக்கு கிடைக்கிறது.",
              },
              {
                key: "மத்திய பாதுகாப்பு படைகள் அங்காடிகளில் விற்கப்படும் பொருட்களுக்கு சரக்கு மற்றும் சேவை வரியில் 50 சதவீதம் தள்ளுபடி மத்திய அரசால் வழங்கப்படுகிறது. இதே சலுகை தமிழ்நாடு காவல்துறையால் நடத்தப்படும் காவலர் அங்காடிகளுக்கு வழங்கப்படுவதில்லை .",
              },
            ]}
            renderItem={({ item }) => {
              return (
                <View style={{ marginBottom: 10 }}>
                  <Text style={{ fontSize: 18, textAlign: "justify" }}>
                    <EvilIcons
                      name="arrow-right"
                      size={20}
                      color="black"
                      type="entypo"
                    />
                    {item.key}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate("DownloadPDF", {
              link: [
                {
                  name: "VAT Exemption",
                  link: "https://kavalarnalantn.in/pdf/Canteen/1.pdf",
                },
                {
                  name: "VAT exemption for CPC goods",
                  link: "https://kavalarnalantn.in/pdf/Canteen/2.pdf",
                },
                {
                  name: "Finacial sanction for 3 canteens",
                  link: "https://kavalarnalantn.in/pdf/Canteen/3.pdf",
                },
                {
                  name: "Extension of canteen for Prison, Rescue and Fire",
                  link: "https://kavalarnalantn.in/pdf/Canteen/4.pdf",
                },
                {
                  name: "Utilising the facilities of Police Canteen by Forest personnel",
                  link: "https://kavalarnalantn.in/pdf/Canteen/5.pdf",
                },
                {
                  name: "Utilising the facilities of Police Canteen by Forest personnel",
                  link: "https://kavalarnalantn.in/pdf/Canteen/6.pdf",
                },
                {
                  name: "Establishing of 44 TNPC additonally",
                  link: "https://kavalarnalantn.in/pdf/Canteen/7.pdf",
                },
                {
                  name: "Establishment of Pudupet Canteen",
                  link: "https://kavalarnalantn.in/pdf/Canteen/8.pdf",
                },
                {
                  name: "Establishment of Kondithope Canteen",
                  link: "https://kavalarnalantn.in/pdf/Canteen/9.pdf",
                },
                {
                  name: "Establishment of TNPA (Oonamencherry) Canteen",
                  link: "https://kavalarnalantn.in/pdf/Canteen/10.pdf",
                },
                {
                  name: "Extension of canteen facilities to the Ministerial Staff of Tamilnadu Fire and Rescue Services",
                  link: "https://kavalarnalantn.in/pdf/Canteen/11.pdf",
                },
                {
                  name: "Extension of Canteen facility to Ministerial Staff of Prison Dept",
                  link: "https://kavalarnalantn.in/pdf/Canteen/12.pdf",
                },
                {
                  name: "Amount sanction for establishing 44 additional Canteen - Amendment",
                  link: "https://kavalarnalantn.in/pdf/Canteen/13.pdf",
                },
                {
                  name: "Sanction of unforeseen expenditure for 44 addtional Canteen - Contingent Fund",
                  link: "https://kavalarnalantn.in/pdf/Canteen/14.pdf",
                },
                {
                  name: "Amendment for 44 addtional canteen",
                  link: "https://kavalarnalantn.in/pdf/Canteen/15.pdf",
                },
                {
                  name: "50% Refund of GST -Commercial Tax and Registration Dept",
                  link: "https://kavalarnalantn.in/pdf/Canteen/16.pdf",
                },
                {
                  name: "Six Canteen Establishment in Newly formed Districts",
                  link: "https://kavalarnalantn.in/pdf/Canteen/17.pdf",
                },
                {
                  name: "Financial sanction for Egmore canteen construction",
                  link: "https://kavalarnalantn.in/pdf/Canteen/18.pdf",
                },
              ],
            })
          }
        >
          <View style={styles.HomeHeader}>
            <View style={styles.homeTitle}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#a52a2a" }}
              >
                Download
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.HomeHeader}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.tnpolicecanteen.com/")}
          >
            <View style={styles.homeTitle}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#212761",
                }}
              >
                Go To Official Site
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
export default CanteenDetails;
