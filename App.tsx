import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // replace with any image you want
      }}
      style={{ flex: 1, justifyContent: "flex-end" }}
    >
      <View style={{ padding: 20, marginBottom: 50 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: "white",
            marginBottom: 10,
          }}
        >
          Your Next Adventure Starts Here
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: "rgba(255,255,255,0.8)",
            marginBottom: 20,
          }}
        >
          Life’s too short to stay in one place. Find your next favorite city,
          beach, or mountain and let’s get moving!
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#00C5A1",
            paddingVertical: 14,
            borderRadius: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
            Start Exploring
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}