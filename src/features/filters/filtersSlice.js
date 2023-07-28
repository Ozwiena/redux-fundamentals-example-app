const initialState = {
    status: 'All',
    colors: []
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'filters/statusFilterChanged': {
            return {
                ...state,
                status: action.payload
            }
        }
        case 'filters/colorFilterChanged': {
            if (action.payload.changeType === 'addColor') {
                return {
                ...state,
                colors: [...state.colors].push(action.payload.color)
                }
            }
            if (action.payload.changeType === 'removeColor') {
                return {
                    ...state,
                    colors: state.colors.filter(color => color !== action.payload.color)
                }
            }
            return state;
        }
        default:
            return state
    }
}