import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";

import KanbanContainer from "./Kanban/KanbanContainer";
import withNavBar from "./NavBar/withNavBar";
import KanbanInspector from "./Kanban/KanbanInspector";


 //Main App Object
const App = ({laneData}) => {
  const [objects, setObjects] = useState([]);
  // const [selectedObject, setSelectedObject] = useState({});

  //useEffect requires a function as its first parameter
  useEffect( () => { 
    setObjects(laneData);
  }, [])  

  return (
    // <AppContainer className="App">
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <KanbanContainer laneData={objects.lanes} />
      </Grid>
      <Grid item xs={2}>
        <KanbanInspector />
      </Grid>
    </Grid>
    // </AppContainer>
  );
}

const mapStateToProps = (state) =>{ 
  return ({
    laneData: state.laneData
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
   
  }
}

export default withNavBar(connect( mapStateToProps, mapDispatchToProps )(App));
