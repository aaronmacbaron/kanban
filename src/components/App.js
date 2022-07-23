import React from "react";
import { Grid } from "@mui/material";

import KanbanContainer from "./Kanban/KanbanContainer";
import withNavBar from "./NavBar/withNavBar";
import KanbanInspector from "./Kanban/KanbanInspector";


 //Main App Object
const App = () => {
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <KanbanContainer />
      </Grid>
      <Grid item xs={2}>
        <KanbanInspector />
      </Grid>
    </Grid>
    
  );
}

export default withNavBar(App);
