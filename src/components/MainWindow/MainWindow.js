import React from "react";
import styled from "@emotion/styled";
import TaskItem from "../TaskItem/TaskItem";

const MainWindowContainer = styled.div`
    margin: 20px auto !important;
    max-width:80vw;
`;

const MainWindow = ( { objects, onSelectObject } ) => {

    return(
        <MainWindowContainer className="ui cards">
            {objects.map((o)=> {
                return <TaskItem key={o.id} id={o.id} type={o.type} title={o.title} exp={o.exp} onSelect={onSelectObject}/>
            })}
        </MainWindowContainer>
    )
}

export default MainWindow;