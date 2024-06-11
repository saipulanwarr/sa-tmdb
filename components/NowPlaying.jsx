import React from "react";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import { image185, colors } from "@/constants";

const NowPlaying = ({ data }) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now Playing</Text>
      <Image
        source={{ uri: image185(data?.poster_path) }}
        style={styles.image(windowWidth)}
      />
      <Text style={styles.textOriginal}>{data?.original_title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 10,
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },
  image: (windowWidth) => ({
    width: windowWidth * 0.9,
    height: 200,
    borderRadius: 10,
  }),
  textOriginal: { color: colors.black, marginTop: 15, fontWeight: "bold" },
});

export default NowPlaying;
