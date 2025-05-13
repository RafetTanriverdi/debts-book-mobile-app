import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
} from "react-native";
import {
  Button,
  TextInput as Input,
} from "react-native-paper";
import "react-native-url-polyfill/auto";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error, data } =
      await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

    if (error) {
      Alert.alert(error.message);
      setLoading(false);
    } else {
      if (
        data.user?.user_metadata.role ===
        "business"
      ) {
        router.replace("/(business)");
      } else {
        router.replace("/(customer)");
      }
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.verticallySpaced,
          styles.mt20,
        ]}
      >
        <Input
          label="Email"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          mode="outlined"
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
          error={
            email.length > 0 &&
            !email.includes("@")
          }
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          mode="outlined"
          onChangeText={(text) =>
            setPassword(text)
          }
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={"none"}
        />
      </View>
      <View
        style={[
          styles.verticallySpaced,
          styles.mt20,
        ]}
      >
        <Button
          loading={loading}
          onPress={() => signInWithEmail()}
          mode="contained"
        >
          Sign in
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -120,
    padding: 18,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});
