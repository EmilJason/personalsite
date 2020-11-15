import React from "react";
import {
  makeStyles,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    "& .MuiButton-root": {
      background: "linear-gradient(45deg, orange, green)",
      margin: theme.spacing(1),
      color: "white",
    },
  },
}));
export default function Newperson({
  name,
  born,
  about,
  changename,
  changeborn,
  changeabout,
  save
}) {
  const classes = styles();
  return (
    <>
      <Container maxWidth="sm">
        <Paper
          style={{ padding: "4%", marginTop: "3%" }}
          className={classes.root}
          elevate={3}
        >
          <Typography variant="h6">Add new person.</Typography>
          <form onSubmit={save}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            placeholder="Enter name"
            value={name}
            onChange={changename}
            fullWidth
          />

          <TextField
            name="about"
            label="About"
            variant="outlined"
            placeholder="Enter about yourself"
            value={about}
            onChange={changeabout}
            fullWidth
          />

          <TextField
            type="date"
            name="born"
            variant="outlined"
            placeholder="Choose Birthdate"
            value={born}
            onChange={changeborn}
            fullWidth
          />
          <Button type="submit" variant="contained" fullWidth>
            Save
          </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
}
