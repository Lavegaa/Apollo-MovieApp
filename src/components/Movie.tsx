import React from "react";
import { Link } from "react-router-dom";

export default function Movie({ id }: { id: number }) {
  return (
    <div>
      <Link to={`/${id}`}>{id}</Link>
    </div>
  );
}
