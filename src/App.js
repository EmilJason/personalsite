import React, { useState, useEffect } from "react";
import "fontsource-roboto";
import { Grid } from "@material-ui/core";
import axios from 'axios';

import Navbar from "./components/Navbar";
import Newperson from "./components/Newperson";
import PersonLists from "./components/PersonLists";

function App() {
  let [name, setname] = useState(null);
  let [born, setborn] = useState(null);
  let [about, setabout] = useState(null);
  let [list, setlist] = useState([]);

  let handlename = (e) => {
    setname(e.target.value);
    console.log(name);
  };
  let handleborn = (e) => {
    setborn(e.target.value);
    console.log(born);

  };
  let handleabout = (e) => {
    setabout(e.target.value);
    console.log(about);

  };
  
  let loadData = () =>{
    axios.get('http://localhost:1995/person')
    .then(response=>setlist(response.data.rows));
  }

  let save = (e) => {
    try {
      e.preventDefaults();
      axios.post(`http://localhost:1995/person/new`,{name, born, about})
      .then(response=>{
        console.log(response.data);
      });
      loadData();
      alert(name+born+about);
    } catch (error) {
      console.log(error.message)
    }
  };

  useEffect(() => {
    loadData();
  });

  return (
    <>
      <Navbar records={list} />
      <Grid container>
        <Grid item md={6} xs={12}>
          
        <Newperson
          name={name}
          about={about}
          born={born}
          changename={handlename}
          changeborn={handleborn}
          changeabout={handleabout}
          save={save}
          />
        </Grid>
        <Grid item md={6} xs={12}>
        <PersonLists value={list} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
