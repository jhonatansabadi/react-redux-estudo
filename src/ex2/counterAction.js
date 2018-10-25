export function inc(){
    return {
        type: 'ICN'
    }
}

export function dec(){
    return {
        type: 'DEC'
    }
}

export function stepChanged(e){
    return {
        type: 'STEP_CHANGED',
        payload: e.target.value
    }
}