import React, { useState, useEffect } from "react";
import KanbanContainer from "./Kanban/KanbanContainer";
import withNavBar from "./NavBar/withNavBar";
const objectData = [
  {
    id:3333,
    title: 'Analysis on 3DS 2.2 implementation',
    type: 'story',
    exp: 10
  }, 
  {
    id:4444,
    title: 'Fix image sizing in navigation drawer',
    type: 'bug',
    exp: 2
  },
  {
    id:555,
    title: 'Analysis on 3DS 2.2 implementation',
    type: 'story',
    exp: 10
  }, 
  {
    id:6,
    title: 'Analysis on 3DS 2.2 implementation',
    type: 'story',
    exp: 10
  }, 
  {
    id:777,
    title: 'Analysis on 3DS 2.2 implementation',
    type: 'story',
    exp: 10
  }, 
  {
    id:888,
    title: 'Analysis on 3DS 2.2 implementation',
    type: 'story',
    exp: 10
  }, 
]

 //Main App Object
const App = () => {
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

export default withNavBar(App);
