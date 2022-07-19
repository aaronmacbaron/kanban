import React from "react";

const withNavBar = Component => {
    return () => {
        return (
        <div>
            <div className="ui secondary pointing menu">
                <a className="active item" href="/">
                    Home
                </a>
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