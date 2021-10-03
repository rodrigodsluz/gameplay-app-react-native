import { FlatList, View } from "react-native";

import React from "react";
import { styles } from "./styles";
import { Guild } from "../Guild";
import { ListDivider } from "../ListDivider";
import { GuildProps } from "../Appointment";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props){
  const guilds = [
    {
      id: "1",
      name: "Legendary",
      icon: null,
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item}) => (
          <Guild data={item}/>
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  );
}
