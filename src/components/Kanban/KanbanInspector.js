import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import FieldList from "../FieldList/FieldList"

const InspectorContainer = styled.div`
    width: 13vw;
    display:flex;
    justify-content: normal;
    flex-direction: column;
`
const CenterWrapper = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: row;
`

const Heading = styled.h3`
    text-align:center;
`


const KanbanInspector = ({selectedItem}) => {
    
    return (
        <CenterWrapper>
            <InspectorContainer>
                <Heading>Properties</Heading>
                { selectedItem && (
                   <FieldList data={selectedItem}/>
                )}
            </InspectorContainer>
        </CenterWrapper>
    )
}

const mapState = (state) => {
    return {
        selectedItem: state.laneData.selectedItem
    };
}

const mapDispatch = (dispatch) => {
    return {
        onSelectItem: dispatch.laneData.selectItem
    }
}

export default connect(mapState, mapDispatch)(KanbanInspector)