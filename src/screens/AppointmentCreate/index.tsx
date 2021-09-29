import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { CategorySelect } from "../../components/CategorySelect";
import { Feather } from "@expo/vector-icons";
import { GuildIcon } from "../../components/GuildIcon";
import { Header } from "../../components/Header";
import { RectButton } from "react-native-gesture-handler";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function AppointmentCreate() {
  const [category, setCategory] = useState<string>("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
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

          <View style={styles.field}>
            <View>
              <Text style={styles.label}>Day and month</Text>

              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>/</Text>
                <SmallInput maxLength={2} />
              </View>
            </View>

            <View>
              <Text style={styles.label}>Hour and minute</Text>

              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>:</Text>
                <SmallInput maxLength={2} />
              </View>
            </View>
          </View>

          <View style={[styles.field, { marginBottom: 12 }]}>
            <Text style={styles.label}>Description</Text>

            <Text style={styles.caracteresLimit}>Max 100 caracters</Text>
          </View>

          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />

          <View style={styles.footer}>
            <Button title="Schedule"/>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
