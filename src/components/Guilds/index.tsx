import { FlatList, View } from "react-native";

import React from "react";
import { styles } from "./styles";
import { Guild } from "../Guild";
import { ListDivider } from "../ListDivider";
import { GuildProps } from "../Appointment";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: "1",
      name: "Legendary",
      icon: "image.png",
      owner: true,
    },
    {
      id: "2",
      name: "Game people",
      icon: "image.png",
      owner: true,
    },
    {
      id: "3",
      name: "Game people",
      icon: "image.png",
      owner: true,
    },
    {
      id: "4",
      name: "Game people",
      icon: "image.png",
      owner: true,
    },
    {
      id: "5",
      name: "Game people",
      icon: "image.png",
      owner: true,
    },
    {
      id: "6",
      name: "Game people",
      icon: "image.png",
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ListHeaderComponent={() => <ListDivider isCentered />}
        style={styles.guilds}
      />
    </View>
  );
}
