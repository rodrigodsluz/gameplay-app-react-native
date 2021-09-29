import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import BannerImg from "../../assets/banner.png";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function AppointmentDetails() {
  return (
    <Background>
      <Header
        title="Details"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Legendary</Text>

          <Text style={styles.subtitle}>
            It's today that we'll reach the challenger without losing a md10
            match
          </Text>
        </View>
      </ImageBackground>
    </Background>
  );
}
