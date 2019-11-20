import React, { useContext } from "react";
import  StateContext from "../context";

import Styled from "styled-components";
import "./activity.css"

const Button = Styled.button`
    display: inline-block;
    color: #7a161e;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #7a161e;
    border-radius: 3px;
    display: block;`;

const Input = Styled.input`
    border: 2px solid #7a161e;
    border-radius: 3px;
    margin: 1rem;
    font-size: 16px;`;

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
            newCatName: "foo",
            newCatActivity: "sleeping"
        })
    }

    return ( 
        <div>
            <h1 className="title">The Cat's Activity</h1>
            <div className="container">
                <Input
                type="text" 
                name="newName"
                placeholder="name"
                onChange={handleChange} />
                <Input
                type="text"
                activity="activity"
                placeholder="activity"
                onChange={handleUpdate} />
                <Input
                type="text"
                placeholder="new cat" />
                <Button onClick={handleNew}>Add Cat</Button>
            </div>
            <p className="text-info">
                {value.name} is {value.activity}
            </p>
            <p>
                {value.name}
            </p>
            <div className="activity-button-container">
                <ul style={{ listStyleType: "none"}}>
                    <li>
                        <Button onClick={handleClick} value="eating">
                            Eating
                        </Button>
                    </li>
                    <li>
                        <Button onClick={handleClick} value="playing">
                            Playing
                        </Button>
                    </li>
                    <li>
                        <Button onClick={handleClick} value="napping">
                            Napping
                        </Button>
                    </li>
                </ul>
            </div>
            <div className="cat-container">
			    <div className="cat"></div>
			    <div className="cat-movement"></div>
	</div>
        </div>
    );
};

export default Activity;