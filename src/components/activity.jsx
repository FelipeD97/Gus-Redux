import React, { useContext } from "react";
import  StateContext from "../context";

import "./activity.css"

const Activity = () => {
    const [value, dispatch] = useContext(StateContext);
    console.log(value);
    
    const handleClick = (e) => {
        e.preventDefault();
        dispatch({
            type: "changeActivity",
            activity: e.target.value
        });
    };

    const handleChange = (e) => {
        e.preventDefault();
        dispatch({
            type: "changeName",
            newName: e.target.value
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch({
            type: "newActivity",
            activity: e.target.value
        })
    }

    const handleNew = (e) => {
        e.preventDefault();
        dispatch({
            type: "addCat",
            newCat: e.target.value
        })
    }

    return ( 
        <div>
            <h1 className="title">The Cat's Activity</h1>
            <input 
            className="text-info"
            type="text" 
            name="newName"
            placeholder="name"
            onChange={handleChange} />
            <input
            className="text-info"
            type="text"
            activity="activity"
            placeholder="activity"
            onChange={handleUpdate} />
            <input
            className="text-info"
            type="text"
            value1="value1"
            placeholder="new cat" />
            <button onClick={handleNew}>Add Cat</button>
            <p className="title">
                {value.name} is {value.activity}
            </p>
            <p className="title">
                {value.newCat}
            </p>
            <ul style={{ listStyleType: "none"}}>
                <li>
                    <button onClick={handleClick} value="eating">
                        Eating
                    </button>
                </li>
                <li>
                    <button onClick={handleClick} value="playing">
                        Playing
                    </button>
                </li>
                <li>
                    <button onClick={handleClick} value="napping">
                        Napping
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Activity;