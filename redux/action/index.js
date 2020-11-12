export const ActionType = {
    GET_DATA : 'GET_DATA',
    GET_DATA_SUCCESS: 'GET_DATA_SUCCESS',
    GET_DATA_ERROR: 'GET_DATA_ERROR',
    ADD_DATA: 'ADD_DATA',
    ADD_DATA_SUCCESS: 'ADD_DATA_SUCCESS',
    ADD_DATA_ERROR: 'ADD_DATA_ERROR',

    DELETE_DATA: 'DELETE_DATA',
    DELETE_DATA_SUCCESS: 'DELETE_DATA_SUCCESS',
    DELETE_DATA_ERROR: 'DELETE_DATA_ERROR',

    EDIT_DATA: 'EDIT_DATA',
    EDIT_DATA_SUCCESS: 'EDIT_DATA_SUCCESS',
    EDIT_DATA_ERROR: 'EDIT_DATA_ERROR',
}
export const getData = (list) => {
    return {
        type: ActionType.GET_DATA,
        payload : list
    }
}
export const getDataSuccess = (list) => {
    return {
        type: ActionType.GET_DATA_SUCCESS,
        payload : list
    }
}
export const getDataError = (list) => {
    return {
        type: ActionType.GET_DATA_ERROR,
        payload : list
    }
}


export const addData = (list) => {
    return {
        type: ActionType.ADD_DATA,
        payload : list
    }
}



export const deleteData = (id) => {
    return {
        type: ActionType.DELETE_DATA,
        payload : id
    }
}



export const editData = (list,id) => {
    return {
        type: ActionType.EDIT_DATA,
        payload: {
            list,
            id
        }
    }
}

export const searchData = (list) => {
    return {
        type: ActionType.SEARCH_DATA,
        payload: list
    }
}

