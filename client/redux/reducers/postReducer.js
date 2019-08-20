const initialState = {
    name: '',
    age: '',
    email: ''
}
function postReducer (state=initialState, action) {
    switch(action.type) {
        case 'SAVE': {
            return {
                name: '',
                age: '',
                email: ''
            }
        }
        case 'Update': {
            return {
                name: '',
                age: '',
                email: ''
            }
        }
        default: return state
    }

};

export default postReducer;
