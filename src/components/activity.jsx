import React from "react";

import { connect } from "react-redux";
import { catNap, catEat, catPlay, setName } from "../redux/activity";

const Activity = ({ activity, catNap, catEat, catPlay, setName, name }) => {
    return (
        <div>
            <h1>Cat Reducer</h1>
            <input type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)}></input>
            <p>{name} is {activity}</p>
            <ul style={{ listStyleType: "none"}}>
                <li>
                    <button onClick={() => catEat()}>Eating</button>
                </li>
                <li>
                    <button onClick={() => catNap()}>Napping</button>
                </li>
                <li>
                    <button onClick={() => catPlay()}>Playing</button>
                </li>
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
};

const mapDispatchToProps = dispatch => {
    return {
        catEat: () => dispatch(catEat()),
        catNap: () => dispatch(catNap()),
        catPlay: () => dispatch(catPlay()),
        setName: (gus) => dispatch(setName(gus))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);