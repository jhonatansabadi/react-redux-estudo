const INITIAL_STATE = { step: 1, number: 0 };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ICN':
            return {
                ...state, number: state.number + state.step
            };
        case 'DEC':
            return {
                ...state, numer: state.number - state.step
            };

            
    }
}