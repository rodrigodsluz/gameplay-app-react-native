import React from "react";
import { Text, View, Image, Alert, ActivityIndicator } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/theme";

export type RootStackParamList = {
  Home: undefined;
};

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

export function SignIn() {
  const { loading, signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error: any) {
      Alert.alert(error);
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Connect{"\n"} and organize {"\n"} your games
          </Text>

          <Text style={styles.subtitle}>
            Create groups to play your {"\n"}
            favorite games with your friends
          </Text>

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Sign in with Discord" onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  );
}
