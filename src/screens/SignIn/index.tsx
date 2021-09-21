import React from "react";
import { Text, View, Image, StatusBar } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
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

        <ButtonIcon title="Sign in with Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
