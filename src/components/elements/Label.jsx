import React from "react";

const Label = (props) =>{
    const { htmlFor, children } = props;

    return (
        <label className="form-label" htmlFor={htmlFor}>
            {children}
        </label>
    );

}

export default Label;