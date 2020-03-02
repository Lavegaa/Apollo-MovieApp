import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type poster = {
  bg: string;
};

const Container = styled.div`
  height: 380px;
  width: 100%;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Poster = styled.div<poster>`
  background-image: url(${props => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;
export default function Movie({ id, bg }: { id: number; bg: string }) {
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
    </Container>
  );
}
