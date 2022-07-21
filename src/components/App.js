import React, { useState, useEffect } from "react";
import KanbanContainer from "./Kanban/KanbanContainer";
import withNavBar from "./NavBar/withNavBar";
import { connect } from "react-redux";


 //Main App Object
const App = ({laneData}) => {
  const [objects, setObjects] = useState([]);
  // const [selectedObject, setSelectedObject] = useState({});

  //useEffect requires a function as its first parameter
  useEffect( () => { 
    setObjects(laneData);
  }, [])  

  return (
    <div className="App">
      <KanbanContainer laneData={objects.lanes} />
    </div>
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
