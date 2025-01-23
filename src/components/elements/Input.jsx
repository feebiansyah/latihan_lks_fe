import React from "react";

const Input = (props) => {
    const {type, name, id, placeholder, value, onChange} = props;
    return (
        <input className="form-control" type={type} name={name} id={id} value={value} onChange={onChange} placeholder={placeholder} />
    );
}

export default Input;