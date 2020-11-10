import React from "react";
import { Typography, Container } from "@material-ui/core";
import Person from "./Person";

export default function PersonLists({ value }) {
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h5">Persons</Typography>
        {value.map((item) => {
          return <Person key={item.sid} value={item} />;
        })}
      </Container>
    </>
  );
}
