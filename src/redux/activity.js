import { ACTION_NAP, ACTION_EAT, ACTION_PLAY, ACTION_SET_NAME, ACTION_SET_ACTIVITY } from "./actionTypes";

export const catNap = () => ({
    type: ACTION_NAP
});

export const catEat = () => ({
    type: ACTION_EAT
});

export const catPlay = () => ({
    type: ACTION_PLAY
});

export const setName = name => ({
    type: ACTION_SET_NAME,
    name: name
    }
);

export const setActivity = content => ({
    type: ACTION_SET_ACTIVITY,
    payload: {
        activity: content
    }
});