import React,{ useState} from "react";
import { View } from "react-native";

import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState<string>('')

  const handleSelectedCategory = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile/>
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect selectedCategory={category} setCategory={handleSelectedCategory}/>

        <View style={styles.content}>
          <ListHeader title="Scheduled matches" subtitle="Total 6" />
        </View>
      </View>
    </View>
  );
}
