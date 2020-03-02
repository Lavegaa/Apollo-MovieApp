import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { string } from "prop-types";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

type movie = {
  id: number;
  medium_cover_image: string;
};

export default function Home() {
  const { loading, data } = useQuery(GET_MOVIES);
  if (loading) {
    return "loading...";
  }
  if (data && data.movies) {
    return data.movies.map((m: movie) => <h1>{m.id}</h1>);
  }
}
