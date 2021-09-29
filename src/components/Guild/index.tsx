import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { GuildIcon } from "../GuildIcon";
import React from "react";
import { styles } from "./styles";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  data: GuildProps;
};

export function Guild({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      style={styles.container}
      activeOpacity={0.7}
    >
      <GuildIcon/>

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            { data.name }
          </Text>

          <Text style={styles.subtitle}>
            { data.owner ? 'Admin' : 'Guest' }
          </Text>
        </View>
      </View>
      
    </TouchableOpacity>
  );
}
