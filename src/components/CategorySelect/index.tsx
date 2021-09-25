import React from "react";
import { ScrollView } from "react-native";
import { categories } from '../../utils/categories';
import { Category } from "../Category";
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
          <Category 
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === selectedCategory}
          />
        })
      }
    </ScrollView>
  );
}
