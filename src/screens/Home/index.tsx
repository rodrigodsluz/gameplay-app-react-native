import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";
import { Background } from "../../components/Background";

export function Home() {
  const [category, setCategory] = useState<string>("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Legendary",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "06/22 at 8:40 PM",
      description:
        "It's today that we will reach the challenger without losing a md10 match",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Legendary",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "06/22 at 8:40 PM",
      description:
        "It's today that we will reach the challenger without losing a md10 match",
    },
  ];

  const handleSelectedCategory = (categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  };

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect
        selectedCategory={category}
        setCategory={handleSelectedCategory}
      />

      <View style={styles.content}>
        <ListHeader title="Scheduled matches" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Appointment data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
          showsVerticalScrollIndicator={false}
          style={styles.matches}
        />
      </View>
    </Background>
  );
}
