import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  Button,
  Pressable,
  Alert,
} from "react-native";
import { styles } from "../assets/style/style";
import axios from "axios";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "./DatePicker";
import Modal from "react-native-modal";

function Register({ navigation }) {
  const [otpModal, setOtpModal] = useState(null);
  const [otp, setOtp] = useState(null);
  const [sentOtp, setSentOtp] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      empName: "",
      empStatus: "",
      gpfcpd: "",
      ppocps: "",
      familystatusList: "",
      CandidateName: "",
      rand: "",
      department: "",
      District: "",
      dob: "",
      doe: "",
      dopr: "",
      dod: "",
      gender: "",
      mobileNo: "",
      emailId: "",
      gno: "",
      policePersonnel: "",
      familyMember: "",
      unitName: "",
      userName: "",
      password: "",
      conformpass: "",
    },
  });
  const [isPickerShow, setIsPickerShow] = useState(null);
  const watchedFields = watch();

  const dob = watch("dob");
  const doe = watch("doe");
  const dopr = watch("dopr");
  const dod = watch("dod");
  const password = watch("password");

  useEffect(() => {
    setIsPickerShow(null);
  }, [dob, doe, dopr, dod]);

  const getCurrentDate = (value) => {
    console.log(value, "valueasd");
    const currentDate = value ? value : new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, "0");

    const formattedDate = `${day}-${month}-${year}`;
    console.log(formattedDate, "formattedDate");
    return formattedDate;
  };

  const showPicker = (name, value) => {
    setIsPickerShow((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const itemsStatus = ["Serving", "Retired", "Deceased"];
  const itemsGender = ["Male", "Female", "Transgender"];

  const itemsDepartment = [
    "Police Personnel",
    "Ministerial Staff",
    "Fire & Rescue Services",
    "Prison & Correctional Services",
    "Others",
  ];
  const itemsRank = [
    "Additional Director General of Police",
    "Additional Superintendent of Police",
    "Administrative Officer",
    "Assistant",
    "Assistant Commandant",
    "Assistant Director",
    "Assistant Manager",
    "Automobile Engineer",
    "Band Master",
    "Barber",
    "Batteryman",
    "Binder",
    "Blacksmith",
    "Chargemen",
    "Chief Manager",
    "Chief Reporter",
    "Chief Administrative Officer",
    "Cleaner",
    "Commandant",
    "Cook",
    "Data Entry Assistant",
    "Data Entry Operator",
    "Deputy Commandant",
    "Deputy Director",
    "Deputy Inspector General of Police",
    "Deputy Superintendent of Police",
    "Dhoby",
    "Director General of Police",
    "Dog Boy",
    "Duffadar",
    "Electrician / Fitter / Foreman / Hammerman / Helper",
    "Gardener",
    "Grade I PC",
    "Grade II PC",
    "Havildar",
    "Head Constable",
    "Imposer / Composer / Machine Minder",
    "Inspector General of Police",
    "Inspector of Police",
    "Junior Assistant",
    "Junior Reporter",
    "Lascar",
    "Lance Naik",
    "Legal Advisor",
    "Librarian",
    "Liner / Mechanic / Reborer",
    "Manager",
    "Naik",
    "Office Assistant",
    "Painter / Plumber / Carpenter",
    "Photo Assistant",
    "Photo Attendant",
    "Photographer",
    "Public Relation Officer",
    "Record Assistant",
    "Record Clerk",
    "Sanitary Worker / Scavenger / Scrubber",
    "Senior Reporter",
    "Senior Chief Reporter",
    "Senior Manager",
    "Senior Administrative Officer",
    "Shorthand Reporter",
    "Special Branch Assistant",
    "Special Sub Inspector of Police",
    "Statistical Assistant",
    "Statistical Inspector",
    "Statistical Officer",
    "Station Receptionist",
    "Steno-Typist",
    "Stenographer",
    "Storekeeper",
    "Superintendent of Police",
    "Superintendent",
    "Sub-Inspector of Police",
    "Syrang",
    "Tailor",
    "Technical Assistant",
    "Telephone Operator",
    "Toolkeeper / Turner / Tyreman",
    "Typist",
    "Water Carrier",
    "Works Manager",
  ];
  const itemsCity = [
    "Ariyalur",
    "Avadi Commissionerate",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Coimbatore City",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kancheepuram",
    "Kanniyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Madurai City",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "The Nilgiris",
    "Perambalur",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Salem city",
    "Sivagangai",
    "Tambaram comimissionerate",
    "Thanjavur",
    "Theni",
    "Tirupattur",
    "Thoothukudi",
    "Tirunelveli",
    "Tirunelveli City",
    "Tiruppur",
    "Tiruppur City",
    "Thiruvallur",
    "Tiruvannamalai",
    "Thiruvarur",
    "Tiruchirappalli",
    "Tiruchirappalli City",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ];

  console.log(watchedFields, "watchedFieldswatchedFields123");

  const onSubmit = async () => {
    try {
      let data = {
        number: watchedFields.emailId,
      };
      console.log(data, "datadata87987");
      const response = await axios.post(
        "https://nodebackend.kavalarnalantn.in:5000/user_Register/generateEmailOtp",
        data
      );
      setSentOtp(response.data);
      console.log(response.data, "responseresponse");
      setOtpModal(true);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const submitOtp = async (data) => {
    console.log(sentOtp, "opsssssss", otp);
    if (sentOtp === Number(otp)) {
      try {
        const response = await axios.post(
          "https://nodebackend.kavalarnalantn.in:5000/user_Register/register",
          data
        );
        navigation.navigate("Login");
        setOtpModal(null);
      } catch (error) {
        console.log("Error:", error);
      }
    } else {
      Alert.alert("Entered Worng Otp");
    }
  };

  return (
    <View style={styles.flex}>
      <Modal isVisible={otpModal}>
        <View style={{ backgroundColor: "white", padding: 10 }}>
          <TextInput
            label="Enter Otp"
            placeholder="Enter Otp"
            style={styles.inputBox}
            underlineColor="transparent"
            mode="outlined"
            value={otp}
            onChangeText={(value) => setOtp(value)}
            keyboardType="numeric"
          />
          <View>
            <Pressable style={styles.button} onPress={handleSubmit(submitOtp)}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => setOtpModal(null)}>
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
            <View style={styles.center}>
              <Image
                style={styles.image}
                source={require("../assets/logo.png")}
              />
              <Text style={styles.titleText}>Employee Registration</Text>
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
                    label="Name of the Employee"
                    placeholder="Name of the Employee"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="empName"
              />
              {errors.empName && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <SelectDropdown
                    data={itemsStatus}
                    onSelect={onChange}
                    defaultButtonText="Select Employee Status"
                    buttonStyle={styles.DropDownPicker}
                    renderDropdownIcon={() => (
                      <AntDesign name="down" size={16} color="black" />
                    )}
                    buttonTextStyle={styles.dropDownText}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
                name="empStatus"
              />
              {errors.status && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              {watchedFields?.empStatus === "Serving" && (
                <>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        label="Enter GPF / CPS / PPO No"
                        placeholder="Enter GPF / CPS / PPO No"
                        style={styles.inputBox}
                        underlineColor="transparent"
                        mode="outlined"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        keyboardType="numeric"
                      />
                    )}
                    name="gpfcpd"
                  />
                  {errors.gpfcpsNo && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                </>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <SelectDropdown
                    data={itemsDepartment}
                    onSelect={onChange}
                    defaultButtonText="Select Department"
                    buttonStyle={styles.DropDownPicker}
                    renderDropdownIcon={() => (
                      <AntDesign name="down" size={16} color="black" />
                    )}
                    buttonTextStyle={styles.dropDownText}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
                name="policePersonnel"
              />
              {errors.policePersonnel && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <SelectDropdown
                    data={itemsRank}
                    onSelect={onChange}
                    defaultButtonText="Select Rank"
                    buttonStyle={styles.DropDownPicker}
                    renderDropdownIcon={() => (
                      <AntDesign name="down" size={16} color="black" />
                    )}
                    buttonTextStyle={styles.dropDownText}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
                name="rand"
              />
              {errors.rand && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Police Grade Number"
                    placeholder="Police Grade Number"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="numeric"
                  />
                )}
                name="gno"
              />
              {errors.gno && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Unit Name"
                    placeholder="Unit Name"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="unitName"
              />
              {errors.unitName && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <SelectDropdown
                    data={itemsCity}
                    onSelect={onChange}
                    defaultButtonText="Select City / District"
                    buttonStyle={styles.DropDownPicker}
                    renderDropdownIcon={() => (
                      <AntDesign name="down" size={16} color="black" />
                    )}
                    buttonTextStyle={styles.dropDownText}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
                name="District"
              />
              {errors.District && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <View>
                {/* Display the selected date */}
                <View>
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Date of Birth
                  </Text>
                  <Text
                    onPress={() => showPicker("dob", true)}
                    style={styles.inputBox}
                  >
                    {dob !== "" ? getCurrentDate(dob) : "Date of Birth"}
                  </Text>
                </View>

                <DatePicker
                  onGetDateValue={(value) => setValue("dob", value)}
                  onOpenDatePicker={isPickerShow?.dob}
                />
              </View>
              {errors.dob && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <View>
                {/* Display the selected date */}
                <View>
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Date of Enlistment
                  </Text>
                  <Text
                    onPress={() => showPicker("doe", true)}
                    style={styles.inputBox}
                  >
                    {doe !== "" ? getCurrentDate(doe) : "Date of Enlistment"}
                  </Text>
                </View>
                <DatePicker
                  onGetDateValue={(value) => setValue("doe", value)}
                  onOpenDatePicker={isPickerShow?.doe}
                />
              </View>
              {errors.doe && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}
              {watchedFields?.empStatus === "Retired" && (
                <View>
                  <View>
                    <Text style={{ color: "white", marginBottom: 5 }}>
                      Date of Retirement
                    </Text>
                    <Text
                      onPress={() => showPicker("dopr", true)}
                      style={styles.inputBox}
                    >
                      {dopr !== ""
                        ? getCurrentDate(dopr)
                        : "Date of Retirement"}
                    </Text>
                  </View>
                  <DatePicker
                    onGetDateValue={(value) => setValue("dopr", value)}
                    onOpenDatePicker={isPickerShow?.dopr}
                  />
                  {errors.dopr && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                </View>
              )}
              {watchedFields?.empStatus === "Deceased" && (
                <View>
                  {/* Display the selected date */}
                  <View>
                    <Text style={{ color: "white", marginBottom: 5 }}>
                      Date of Death
                    </Text>
                    <Text
                      onPress={() => showPicker("dod", true)}
                      style={styles.inputBox}
                    >
                      {dod !== ""
                        ? getCurrentDate(dod)
                        : "Date of Date of Death"}
                    </Text>
                  </View>
                  <DatePicker
                    onGetDateValue={(value) => setValue("dod", value)}
                    onOpenDatePicker={isPickerShow?.dod}
                  />
                  {errors.dod && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                </View>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <SelectDropdown
                    data={itemsGender}
                    onSelect={onChange}
                    defaultButtonText="Select Gender"
                    buttonStyle={styles.DropDownPicker}
                    renderDropdownIcon={() => (
                      <AntDesign name="down" size={16} color="black" />
                    )}
                    buttonTextStyle={styles.dropDownText}
                  />
                )}
                name="gender"
              />
              {errors.gender && (
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
                    label="Mobile No"
                    placeholder="Mobile No"
                    keyboardType="numeric"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="mobileNo"
              />
              {errors.mobileNo && (
                <Text style={styles.errorMessage}>
                  Maximum 10 Number allowed
                </Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Email Id"
                    placeholder="Email ID"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="emailId"
              />
              {errors.emailId && (
                <Text style={styles.errorMessage}>Email Id required</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Name of the Family Member with Relation"
                    placeholder="Name of the Family Member with Relation"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="familyMember"
              />
              {errors.realation && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="User Name"
                    placeholder="User Name"
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
                    label="Password"
                    placeholder="Password"
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry={false}
                    enablesReturnKeyAutomatically
                    value={value}
                  />
                )}
                name="password"
              />
              {errors.password && (
                <Text style={styles.errorMessage}>
                  Password must contain at least one uppercase letter, one
                  lowercase letter, one number, and one special character, and
                  must be at least 8 characters long.
                </Text>
              )}

              <Controller
                control={control}
                rules={{
                  required: true,
                  validate: (value) =>
                    value === password || "Passwords do not match.",
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    secureTextEntry
                    style={styles.inputBox}
                    underlineColor="transparent"
                    mode="outlined"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="conformpass"
              />
              {errors.conformpass && (
                <Text style={styles.errorMessage}>Passwords do not match.</Text>
              )}

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
                  onPress={() => navigation.navigate("Login")}
                >
                  Login
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default Register;
