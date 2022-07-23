import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import KanbanLane from "./KanbanLane";

const Container = styled.div`
    display:flex;
    column-gap:10px;
    justify-content: space-evenly;
    margin: 0 10px;
`

const KanbanContainer = ({laneData, setMaxEarnableExp}) => {
    const [objects, setObjects] = useState([]);
    
    const initEarnableExp = (laneData) => {
        let maxXp = laneData.lanes.map((l) => {
            return l.tasks.map((t) => {
                return t.exp
            });
        }).map((l)=>{
            return l.reduce( (total,num) => { 
                return num +total
            }, 0)
        }).reduce((total, num)  =>  {
            return num+total
        }, 0);
        console.log(maxXp);
        setMaxEarnableExp(maxXp);
    }

    useEffect( () => { 
        initEarnableExp(laneData); 
        setObjects(laneData.lanes);
    }, [])  

    return (
        <Container>
            {objects && objects.map((laneObject) => {
                return <KanbanLane 
                            key={`kanbanLane-${laneObject.title}`} 
                            title={laneObject.title} 
                            tasks={laneObject.tasks} 
                        />
                
            })}
        </Container>
    )
}

const mapStateToProps = (state) =>{ 
    return ({
      laneData: state.laneData
    })
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setMaxEarnableExp: dispatch.laneData.setMaxEarnableExp
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(KanbanContainer);