import { StyleSheet, Text, TextInput, View } from "react-native";
import { useMemo, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

export default function App() {
  const [devName, setDevName] = useState(() => "Juan Dela Cruz");
  const [mbti, setMbti] = useState(() => "INFP");
  const [enneagram, setEnneagram] = useState(() => "5");

  const enng = useMemo(() => {
    if (enneagram.length > 1) {
      return enneagram[0] + "w" + enneagram[1];
    } else {
      return enneagram[0];
    }
  }, [enneagram]);

  const [fontsLoaded, fontError] = useFonts({
    SamsungSansSharp: require("./assets/fonts/SamsungSharpSans-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.heading]}>{devName}</Text>
      </View>
      <View style={styles.subheader}>
        <Text style={styles.subheading}>
          {mbti} {enng}
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.textInputContainer}>
          <Text>Your Dev Name</Text>
          <TextInput
            placeholder="e.g. Juan Dela Cruz"
            onChangeText={(prev) => setDevName(prev)}
            value={devName}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={styles.textInputContainer}>
          <Text>MBTI</Text>
          <TextInput
            placeholder="e.g. INFP"
            onChangeText={(prev) => setMbti(prev)}
            value={mbti}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={styles.textInputContainer}>
          <Text>Enneagram</Text>
          <TextInput
            placeholder="e.g. 5w4"
            inputMode="numeric"
            maxLength={2}
            style={styles.textInput}
            onChangeText={(prev) => setEnneagram(prev)}
            value={enneagram}
          ></TextInput>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    padding: "10px",
  },
  heading: {
    fontSize: 45,
    fontWeight: "bold",
  },
  subheader: {
    padding: "5px",
  },
  subheading: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "SamsungSansSharp",
  },
  body: {
    padding: 20,
    marginTop: 50,
  },
  textInput: {
    margin: 10,
    borderWidth: 1.5,
    borderColor: "gray",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 5
  },
  textInputContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: 300,
  },
});
