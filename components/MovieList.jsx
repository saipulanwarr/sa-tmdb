import React from "react";
import {
  View,
  Image,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { colors } from "@/constants";
import { image185 } from "@/constants";

const MovieList = ({ data, title }) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View style={styles.contentTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <TouchableOpacity
            style={styles.item(windowWidth)}
            onPress={() => {
              router.push({ pathname: "/detail", params: { id: item.id } });
            }}
            key={index}
          >
            <Image
              source={{ uri: image185(item.poster_path) }}
              style={styles.image(windowWidth)}
            />
            <Text style={styles.textOriginal} numberOfLines={1}>
              {item.original_title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.border,
  },
  contentTitle: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: { color: colors.black, fontWeight: "600", fontSize: 16 },
  item: (windowWidth) => ({
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth * 0.4,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  }),
  image: (windowWidth) => ({ width: windowWidth * 0.4, height: 100 }),
  textOriginal: { color: colors.black, paddingVertical: 10 },
});

export default MovieList;
