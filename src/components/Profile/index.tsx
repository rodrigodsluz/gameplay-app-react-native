import React from "react";
import { View, Text, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";

import { styles } from "./styles";

export function Profile() {
  const { user, singOut } = useAuth();

  function handleSignOut() {
    Alert.alert("Logout", "Deseja sair do GamePlay?", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => singOut(),
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleSignOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá</Text>

          <Text style={styles.username}>{user.firstName}</Text>
        </View>

        <Text style={styles.message}>Today is victory day</Text>
      </View>
    </View>
  );
}
