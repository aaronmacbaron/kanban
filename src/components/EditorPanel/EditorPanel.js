import React from "react";

const EditorPanel = ({ selectedObject }) => {

    const { title, type, exp } = selectedObject;

    return (
        <div className="ui form">
            <div className="field">
                <label>Title</label>
                <input type="text" name="task-title" placeholder="Title" value={title}/>
            </div>
            <div className="field">
                <label>Task Type</label>
                <input type="text" name="task-type" placeholder="Task Type" value={type}/>
            </div>
            <div className="field">
                <label>Experience Points granted on completion:</label>
                <input type="text" name="exp" placeholder="Experience Points" value={exp}/>
            </div>
        </div>
    )
}

export default EditorPanel;