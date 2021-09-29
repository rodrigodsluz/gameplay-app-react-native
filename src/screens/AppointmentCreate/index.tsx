import React, { useState } from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";

export function AppointmentCreate() {
  const [category, setCategory] = useState<string>("");

  return (
    <Background>
      <Header title="Schedule match" />

      <Text
        style={[
          styles.label,
          { marginLeft: 24, marginTop: 36, marginBottom: 18 },
        ]}
      >
        Category
      </Text>

      <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        selectedCategory={category}
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            {/* <View style={styles.image} /> */}
            <GuildIcon />

            <View style={styles.selectBody}>
              <Text style={styles.label}>Select a server</Text>
            </View>
            <Feather
              name="chevron-right"
              size={18}
              color={theme.colors.heading}
            />
          </View>
        </RectButton>

        <SmallInput />
      </View>
    </Background>
  );
}
