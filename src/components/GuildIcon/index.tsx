import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {
  const uri = "https://pageflows.imgix.net/media/logos/discord.jpg?auto=compress&ixlib=python-1.1.2&s=688ac0a016be9c5eb4984aeb907042fd";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
