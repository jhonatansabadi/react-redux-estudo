const initalState = { item: 0 };

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      return {
        ...state,
        item: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
