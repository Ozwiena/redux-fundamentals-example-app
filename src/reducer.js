

  export default function appReducer(state, action) {
    switch (action.type) {
        case 'filters/statusFilterChanged': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.payload
                }
            }
        }
        default:
            return state
    }
  }
  