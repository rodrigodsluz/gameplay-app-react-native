import React from "react";
import { Text, View, Image, StatusBar } from "react-native";
import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {"\n"} easily {"\n"} your gambling
        </Text>

        <Text style={styles.subtitle}>
          Create groups to play your {"\n"}
          favorite games with your friends
        </Text>
      </View>
    </View>
  );
}
