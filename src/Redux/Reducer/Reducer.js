import { ActionType } from "../ActionType";

const initialContact = {
    contacts : []
}

export const ContactReducer = (state = initialContact, action) => {
    switch (action.type) {
        case ActionType.ADDCONTACT:
            return {...state, contacts:action.payload}
        default:
            return state
    }
}

export const SelectedContactReducer = (state = initialContact, action) => {
    switch (action.type) {
        case ActionType.SELECTEDCONTACT:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

// const initialMessage = {
//     messages : []
// }

// export const MessageReducer = (state = initialMessage, action) => {
//     switch (action.type) {
//         case ActionType.ADDMESSAGE:
//             return {...state, messages:action.payload}
//         default:
//             return state;
//     }
// }
