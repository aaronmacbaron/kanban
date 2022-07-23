import React from "react";


const buildForm = (data) => {
    const keys = Object.getOwnPropertyNames(data);
    const elements = keys.map((k,i) => {
        return (
            <div className="field" key={`${k}-${i}`}>
                <label>{k.toUpperCase()}</label>
                <input type="text" name={k} placeholder={k.toLocaleUpperCase()} value={data[k] instanceof Object ? JSON.stringify(data[k]) : data[k]}/>
            </div>
        )
    })
    return elements;
    
}

const FieldList = ({data}) => {

    return(
        <div className="ui form">
            {buildForm(data)}
        </div>
    )
}

export default FieldList;