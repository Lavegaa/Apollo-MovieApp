import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIE = gql`
  query getMovie($id: String!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      summary
    }
  }
`;

export default function Detail() {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: {
      id
    }
  });
  console.log(loading, data);

  return <h1>detail</h1>;
}
