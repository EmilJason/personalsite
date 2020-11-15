import React, {useState} from 'react';
import {Container,
        Paper,
        TextField,
        Button} from '@material-ui/core';

const style ={
    contents:{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1
    }
}

const EditPerson = () =>{
    let [name,setName] = useState("");
    let [about,setAbout] = useState("");
    let [born,setBorn] = useState("");
    return(
        <>
        <Container style={style.contents}>
            <Paper>
                <form>
                    <TextField
                        type="text"
                        name="name"
                        label="Name"
                        variant="outlined" />

                    <TextField
                        type="text"
                        name="about"
                        label="About"
                        variant="outlined" />

                    <TextField
                        type="date"
                        name="name"
                        label="Name"
                        variant="outlined" />

                    <Button
                        variant="outlined"
                        color="default">
                            Save
                    </Button>
                </form>
            </Paper>
        </Container>
        </>
    );
}

export default EditPerson;