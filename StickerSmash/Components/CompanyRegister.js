import React, { useState } from "react";
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
import { useForm, Controller } from "react-hook-form";
import * as DocumentPicker from "expo-document-picker";

function CompanyRegister({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedImage, "imgessssss");
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      companyName: "",
      contractName: "",
      phoneNo: "",
      EmailId: "",
      panNo: "",
      gstDoc: selectedImage,
      userName: "",
      password: "",
    },
  });

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf", // Specify the file type you want to pick (PDF in this case)
      });

      if (result.type === "success") {
        // Handle the selected file (result.uri contains the file URI)
        console.log("Selected file URI:", result.uri);
        setValue("gstDoc", result);
      }
    } catch (error) {
      console.log("Error picking document:", error);
    }
  };

  const onSubmit = async (data) => {
    console.log(data, "3247192873498data");
    const formData = new FormData();
    formData.append("file", {
      uri: data.gstDoc.uri,
      name: data.gstDoc.name,
      type: "application/pdf",
    });
    
    for (const field in data) {
      if (field !== "gstDoc" && data.hasOwnProperty(field)) {
        formData.append(field, data[field]);
      }
    }

    try {
      const response = await fetch(
        "https://nodebackend.kavalarnalantn.in:5000/company_User/register",
        {
          method: "POST",
          body: formData,
        }
      );
      navigation.navigate("CompanyLogin");
    } catch (error) {
      console.log("Error uploading file:", error);
    }
  };

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
        <ScrollView>
          <View style={styles.card}>
            <View>
              <View style={styles.center}>
                <Image
                  style={styles.image}
                  source={require("../assets/logo.png")}
                />
                <Text style={styles.titleText}>Company Registration</Text>
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
                      label="Enter Company Name"
                      placeholder="Enter Company Name"
                      style={styles.inputBox}
                      underlineColor="transparent"
                      mode="outlined"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="companyName"
                />
                {errors.companyName && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      label="Enter contact person"
                      placeholder="Enter contact person"
                      style={styles.inputBox}
                      underlineColor="transparent"
                      mode="outlined"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="contractName"
                />
                {errors.contractName && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^\d{0,10}$/,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      label="Enter Mobile No"
                      placeholder="Enter Mobile No"
                      style={styles.inputBox}
                      underlineColor="transparent"
                      mode="outlined"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      keyboardType="numeric"
                    />
                  )}
                  name="phoneNo"
                />
                {errors.phoneNo && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      label="Enter email-id"
                      placeholder="Enter email-id"
                      style={styles.inputBox}
                      underlineColor="transparent"
                      mode="outlined"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="EmailId"
                />
                {errors.EmailId && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      label="Enter GST / PAN No."
                      placeholder="Enter GST / PAN No."
                      style={styles.inputBox}
                      underlineColor="transparent"
                      mode="outlined"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="panNo"
                />
                {errors.panNo && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}

                <Pressable style={styles.button} onPress={pickDocument}>
                  <Text style={styles.buttonText}>Upload GST Document</Text>
                </Pressable>

                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      label="Enter User Nmae"
                      placeholder="Enter User Nmae"
                      style={styles.inputBox}
                      underlineColor="transparent"
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

                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      label="Enter Password"
                      placeholder="Enter Password"
                      style={styles.inputBox}
                      underlineColor="transparent"
                      mode="outlined"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="password"
                />
                {errors.password && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}
              </View>
              <View style={styles.center}>
                <Pressable
                  style={styles.button}
                  onPress={handleSubmit(onSubmit)}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
                <Text
                  variant="titleSmall"
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: 14,
                    marginLeft: 10,
                    textAlign: "center",
                  }}
                  onPress={() => navigation.navigate("CompanyLogin")}
                >
                  Back
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default CompanyRegister;
