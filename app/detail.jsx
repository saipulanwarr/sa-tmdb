import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useSelector, useDispatch } from "react-redux";

import { colors, image185 } from "@/constants";
import { useGetMovieDetailsQuery } from "@/store/movie";
import { add, remove } from "@/store/favoriteSlice";

const Detail = () => {
  const favorite = useSelector((state) => state.favorite.value);
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const windowWidth = Dimensions.get("window").width;
  const params = useLocalSearchParams();
  const { id } = params;
  const { data } = useGetMovieDetailsQuery(id);

  useEffect(() => {
    if (data) {
      checkFavorite(data, favorite);
    }
  }, [favorite]);

  const handleFavorite = (value) => {
    const findFav = favorite.find((item) => item.id === value.id);
    if (findFav) {
      dispatch(remove(value.id));
    } else {
      dispatch(add(value));
    }
  };

  const checkFavorite = (val, fav) => {
    const findFav = fav.find((item) => item.id === val.id);
    if (findFav) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: data?.original_title,
          headerRight: () => (
            <TouchableOpacity onPress={() => handleFavorite(data)}>
              <AntDesign
                name="hearto"
                size={20}
                color={isFav ? "red" : "black"}
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView>
        <View>
          <Image
            source={{ uri: image185(data?.poster_path) }}
            style={styles.image(windowWidth)}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.textOriginal}>{data?.original_title}</Text>
          <View style={styles.contentGenre}>
            {data?.genres.map((item, index) => (
              <Text key={index} style={styles.textName}>
                {item.name}
              </Text>
            ))}
          </View>
          <Text style={{ color: colors.black }}>{data?.overview}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  image: (windowWidth) => ({ width: windowWidth, height: 350 }),
  content: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  textOriginal: { color: colors.black, fontSize: 20, fontWeight: "600" },
  textName: {
    color: colors.black,
    marginRight: 10,
    marginVertical: 10,
  },
  contentGenre: { flexDirection: "row" },
});

export default Detail;
