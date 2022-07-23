import React from "react";
import styled from "@emotion/styled";

const NavButton = styled.div`
    cursor:pointer;
`

const withNavBar = Component => {
    return () => {
        return (
        <div>
            <div className="ui secondary pointing menu">
                <a className="active item" href="/">
                    Home
                </a>
                <NavButton className="item">
                    +Add Task
                </NavButton>
                <div className="right menu">
                    <a className="ui item" href="/">
                    Logout
                    </a>
                </div>
            </div>
            <Component />
        </div>
        )
    }
}



export default withNavBar;