import { OPEN_SIDEBAR, CLOSE_SIDEBAR, SidebarActionTypes } from '../actions/actions';

const initialState = {
    isSidebarOpen: false
}

function appReducer(state = initialState, action: SidebarActionTypes ) {
    switch(action.type) {
        case OPEN_SIDEBAR:
            return Object.assign({}, state, {
                isSidebarOpen: true
            })
        case CLOSE_SIDEBAR:
            return Object.assign({}, state, {
                isSidebarOpen: false
            })
        default:
            return state
    }
}

export default appReducer;