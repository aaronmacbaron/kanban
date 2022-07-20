import React, { useState, useEffect } from "react";
import KanbanContainer from "./Kanban/KanbanContainer";
import withNavBar from "./NavBar/withNavBar";
import { connect } from "react-redux";


 //Main App Object
const App = ({objectData, onUpdateLanes}) => {
  const [objects, setObjects] = useState([]);
  // const [selectedObject, setSelectedObject] = useState({});

  //useEffect requires a function as its first parameter
  useEffect( () => { 
    setObjects(objectData);
  }, [])  

  //This is a handler function that gets passed down to a component in react to be used by that component
  // const handleSelectedObject = (objectId) => { 
  //   let selected = {};
  //   objects.forEach((o) => {
  //     if(o.id === objectId){
  //       selected = o;
  //     }
  //   });

  //   setSelectedObject(selected);    
  // }

  return (
    <div className="App">
      <KanbanContainer tasks={objects} />
    </div>
  );
}

const mapStateToProps = (state) =>{ 
  return ({
    objectData: state.lanes
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateLanes: dispatch.lanes.updateLanes
  }
}

export default withNavBar(connect(mapStateToProps,mapDispatchToProps)(App));
