import React from "react";
import { ScrollView } from "react-native";
import { categories } from '../../utils/categories';
import { styles } from "./styles";

export function CategorySelect() {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => {
          <Category />
        })
      }
    </ScrollView>
  );
}
