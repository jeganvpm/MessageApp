import { ActionType } from "./ActionType";

export const addContact = (contacts) => {
    return {
        type:ActionType.ADDCONTACT,
        payload: contacts
    }
}

export const selectedContact = (contact) => {
    return {
        type:ActionType.SELECTEDCONTACT,
        payload: contact
    }
}
