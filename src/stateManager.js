import {
    atom
} from 'recoil';


export const logInfo = atom({
    key: "logInfo",
    default: {
        username: "",
        password: "",
        done: false
    }
})