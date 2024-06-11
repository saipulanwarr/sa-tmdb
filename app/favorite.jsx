import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";
import { useSelector } from "react-redux";

import { colors, image185 } from "@/constants";

const favorite = () => {
  const windowWidth = Dimensions.get("window").width;
  const favorite = useSelector((state) => state.favorite.value);

  return (
    <ScrollView style={styles.container}>
      {favorite.map((item, index) => (
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            flexDirection: "row",
            marginVertical: 5,
            padding: 10,
          }}
          key={index}
        >
          <Image
            source={{ uri: image185(item.poster_path) }}
            style={styles.image(windowWidth)}
          />
          <View style={{ flex: 1, padding: 5 }}>
            <Text
              numberOfLines={1}
              style={{ fontSize: 17, fontWeight: "bold", marginBottom: 5 }}
            >
              {item.original_title}
            </Text>
            <Text numberOfLines={4}>{item.overview}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: (windowWidth) => ({ width: windowWidth * 0.4, height: 100 }),
});

export default favorite;
