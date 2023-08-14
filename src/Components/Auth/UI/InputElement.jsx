import React from 'react';

const InputElement = ({placeholder, type, element, changeElement, ...props}) => {
    return (
        <div className="form-floating mb-4">
            <input
                type={type}
                className="form-control"
                id="floatingInput"
                placeholder="password"
                name={element}
                onChange={(e) => changeElement(e.target.value)}/>
            <label htmlFor="floatingInput">{placeholder}</label>
        </div>    );
};

export default InputElement;