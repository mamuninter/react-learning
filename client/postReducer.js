var initialState = {
  employees: [
    { id: 1, name: 'jhon', age: '23'}, 
    { id: 2, name: 'doe', age: '24'}
  ]
};

var postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        employees: [...state.employees, action.data],
      };
    case 'EDIT_POST':
      return {
        ...state,
        employees: state.employees.map(emp => emp.id === action.data.id ? action.data : emp)
      };
      case 'DELETE_POST':
        console.log(action.data.id)
        return {
           ...state,
           employees: [...state.employees.filter((post)=>post.id !== action.data.id)],
        };
    default:
      return state;
  }
};


export default postReducer;