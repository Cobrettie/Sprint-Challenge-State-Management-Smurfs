import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from "../actions/getData"
import { ADD_SMURF } from '../actions/addSmurf';

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
          smurfs: action.payload,
          isFetching: false,
          error: ''
        }

      case FETCH_DATA_FAIL:
        return {
          error: action.payload
        }

      case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload]
      }

    default:
      return state
  }
}