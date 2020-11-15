import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";


export default function Person({ value,edit }) {
  return (
    <>
      <Card style={{ margin: "1rem", padding: "1rem" }}>
        <CardHeader title={value.name} subheader={value.born} />
        <CardContent>
          <Typography variant="body1">About</Typography>
          <Typography variant="body2">{value.about}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={edit}>
            Edit
          </Button>
          <Button variant="contained" color="secondary">
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
