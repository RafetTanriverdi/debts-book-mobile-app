import { HelloWave } from "@/components/HelloWave";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { Button, Text } from "react-native-paper";

export default function Dashboard() {
  const handleLogout = async () => {
    const { error } =
      await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    }
    router.replace("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text >
          Welcome!
        </Text>
        <HelloWave />
        <Button
          mode="contained"
          onPress={() => {
            handleLogout();
          }}
        >
          Log out
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
