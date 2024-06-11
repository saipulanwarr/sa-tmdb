import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { colors } from "@/constants";
import MovieList from "@/components/MovieList";
import NowPlaying from "@/components/NowPlaying";
import {
  useGetUpComingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetNowPlayingMoviesQuery,
} from "@/store/movie";

const Home = () => {
  const upComingMovies = useGetUpComingMoviesQuery();
  const popularMovies = useGetPopularMoviesQuery();
  const nowPlayingMovies = useGetNowPlayingMoviesQuery();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}
      >
        <NowPlaying
          data={nowPlayingMovies.data ? nowPlayingMovies.data.results[0] : {}}
        />
        <MovieList
          data={upComingMovies.data ? upComingMovies.data.results : []}
          title="Upcoming"
        />
        <MovieList
          data={popularMovies.data ? popularMovies.data.results : []}
          title="Popular"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  scrollview: { flex: 1 },
});

export default Home;
