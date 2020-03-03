import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

type poster = {
  bg: string;
};

const LIKE_MOVIE = gql`
  mutation likeMovie($id: String!) {
    likeMovie(id: $id) @client
  }
`;

const Container = styled.div`
  height: 380px;
  width: 100%;
  border-radius: 7px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Poster = styled.div<poster>`
  background-image: url(${props => props.bg});
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
`;
export default function Movie({
  id,
  bg,
  isLiked
}: {
  id: number;
  bg: string;
  isLiked: boolean;
}) {
  const [likeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: id }
  });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <button
        onClick={() => {
          likeMovie();
        }}
      >
        {isLiked ? "Unlike" : "Like"}
      </button>
    </Container>
  );
}
