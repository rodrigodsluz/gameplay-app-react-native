import React from "react";
import { ImageBackground, Text, View, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import BannerImg from "../../assets/banner.png";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { ListDivider } from "../../components/ListDivider";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Rodrigo",
      avatar_url: "http://github.com/rodrigodsluz.png",
      status: "online",
    },
    {
      id: "2",
      username: "Rodrigo",
      avatar_url: "http://github.com/rodrigodsluz.png",
      status: "offline",
    },
  ];
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

      <ListHeader title="Players" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
    </Background>
  );
}
