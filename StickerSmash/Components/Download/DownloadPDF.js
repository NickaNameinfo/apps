import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { styles } from "../../assets/style/style";
import Footer from "../Footer";

function DownloadPDF({ route }) {
  const { link } = route.params;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        alignContent: "center",
        backgroundColor: "#212761",
      }}
    >
      <ScrollView style={{ marginBottom: 20 }}>
        <View style={styles.homeStyles}>
          <View>
            <View style={styles.pdfOptions}>
              {link.map((items) => {
                return (
                  <TouchableOpacity onPress={() => Linking.openURL(items.link)}>
                    <View style={styles.dashBoradCard}>
                      <View>
                        <Text style={styles.cardText}>{items.name}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
export default DownloadPDF;
