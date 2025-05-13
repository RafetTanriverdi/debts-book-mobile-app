import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";

export default function Reports() {
  return (
    <ThemedView>
      <ThemedText type="title">
        Welcome!
      </ThemedText>
      <HelloWave />
    </ThemedView>
  );
}
