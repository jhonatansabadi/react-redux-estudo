const initalState = { resultado: 0 };

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case 'soma': {
      return {
        ...state,
        resultado: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
