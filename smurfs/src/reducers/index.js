import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from "../actions/getData"

const initialState = {
  smurfs: [
    {
      id: 0,
      name: 'Brainey',
      age: 200,
      height: 5
    }
  ],
  isFetching: false,
  error: ''
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }

      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          smurf: action.payload,
          isFetching: false,
          error: ''
        }

      case FETCH_DATA_FAIL:
        return {
          error: action.payload
        }

    default:
      return state
  }
}