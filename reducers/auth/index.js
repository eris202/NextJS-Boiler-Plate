import { SET_USER } from "../../state/reducer";


export default function authReducers(currentState, { type, payload }) {

    switch (type) {
        case SET_USER:

            break;

        default:
            return { ...currentState }
            break;
    }
}