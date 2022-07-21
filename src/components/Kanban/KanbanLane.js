import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import TaskItem from "../TaskItem/TaskItem";
import { connect } from "react-redux";

const Lane = styled.div`
    background:#eee;
    border-radius:6px;
    width:300px;
    min-height:80vh;
    padding:5px;
`
const LaneWrapper = styled.div`
    
`
const KanbanLane = ({tasks, title, laneData, onUpdateLanes, onSelectItem, selectedItem}) => {
    const laneRef = useRef();

    const updateLanePosition = (data) => {
        let overwritableData = laneData;
        let newLaneData = laneData.lanes;
        newLaneData.forEach((l) => {
            if(l.title === data.title){
                const { top, left, width, height } = data
                l.lanePosition = {top, left, width, height}
            }
        });
        overwritableData.lanes = newLaneData;
        onUpdateLanes(overwritableData);
    }

    const findProperLane = (x,y) => {
        let laneTitle;
        console.log(laneData)
        laneData.lanes.forEach((pos) => {
            const { width, height, top, left } = pos.lanePosition;
            if( x > left && x < left+width && y > top && y < top+height)
                laneTitle = pos.title;
        })
        return laneTitle;
    }

    const handleDragStop = (event) => {
        if(false === selectedItem)
            return;

        const {clientX, clientY} = event;
        const properLane = findProperLane(clientX,clientY);
        let overwritableData = laneData;
        let newLaneData = [...laneData.lanes];
        newLaneData.forEach((l) => {
            if(l.title === properLane){
                if(l.tasks.filter((task) => {
                    return task.id === selectedItem.id
                }).length < 1){
                    if(!(false === selectedItem))
                        l.tasks.push(selectedItem)
                }
            } else {
                if(l.tasks.filter((task) => {
                    return task.id === selectedItem.id
                }).length > 0) {
                    l.tasks.forEach((task, taskIndex, taskArray) => {
                        if(task.id === selectedItem.id){
                            taskArray.splice(taskIndex, 1);
                        }
                    });

                }
            }
        });
        overwritableData.lanes = newLaneData;
        onUpdateLanes(overwritableData);
    }

    const handleSelectItem = (selectedItem) => {
        onSelectItem(selectedItem);
    }

    useEffect( ()=> {
        updateLanePosition({
            title,
            top:laneRef.current.offsetTop,
            left:laneRef.current.offsetLeft,
            width: laneRef.current.offsetWidth,
            height: laneRef.current.offsetHeight
        });
    },[])

    return(
        <LaneWrapper>
            <h4>{title}</h4>
            <Lane ref={laneRef}>
                {tasks && tasks.map( (item) => {
                    if(item && item.id)
                        return <TaskItem 
                                    id={item.id}
                                    key={item.id} 
                                    title={item.title} 
                                    type={item.type} 
                                    exp={item.exp} 
                                    handleStop={handleDragStop}
                                    onSelect={handleSelectItem}
                                />
                })}
            </Lane>
        </LaneWrapper>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateLanes: dispatch.laneData.updateLanes,
        onSelectItem: dispatch.laneData.selectItem

    }
}

const mapStateToProps = (state) =>{ 
    return ({
      laneData: state.laneData,
      selectedItem: state.laneData.selectedItem
    })
  };



export default connect( mapStateToProps, mapDispatchToProps)(KanbanLane);