const initialState = {
    list: 'InitialState'
}

export const todos =( state = initialState, action) => {
    switch(action.type) {
        case "ADD_TO_DO":
            return  {
                list: action.todo
            };
        default:
            return state;
    }
}

export default todos;

