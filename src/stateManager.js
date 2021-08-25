import {
    atom
} from 'recoil';

// import React from "react"

// const [state, setState] = React.useState({
//     username: "",
//     password: ""
// })

export const logInfo = atom({
    key: "logInfo",
    default: {
        username: "",
        password: "",
        done: false
    }
})
export const doneTask = atom({
    key: "doneTask",
    default: {
        done: true
    }
})