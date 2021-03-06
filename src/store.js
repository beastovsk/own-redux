export function createStore(rootReducer, initialState) {
    let state = rootReducer(initialState, {type: ''})
    const subscribers = []

    return {
        dispatch(action) {  
            state = rootReducer(state, action)
            subscribers.forEach(sub => sub())
        },
        subscribe(cb) {
            subscribers.push(cb)
        },
        getState() {
            return state
        }
    }
}