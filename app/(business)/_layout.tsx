import { Redirect, Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function BusinessTabLayout() {
  const colorScheme = useColorScheme();

  const { session, loading } = useSelector(
    (state: RootState) => state.auth
  );

  if (loading) return null;

  if (!session) return <Redirect href="/login" />;

  if (
    session.user?.user_metadata?.role ===
    "customer"
  ) {
    return <Redirect href="/(customer)" />;
  }

  if (
    session.user?.user_metadata?.role !==
    "business"
  ) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:
          Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",

          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name="briefcase.fill"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: "Reports",
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name="chart.bar.fill"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
