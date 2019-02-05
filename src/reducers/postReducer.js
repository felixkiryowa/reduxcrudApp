import  { ADD_ITEM, DELETE_ITEM }  from '../actions/types';
// const initialState = {
//     item: []
// }

export default function postReducer(state = [], action){
    switch(action.type) {
        case ADD_ITEM:
          
          return state.concat(action.payload)
        case DELETE_ITEM:
            // return state.filter((post)=>post.id !== action.id);
            state.forEach(element => {
                if(element.id === action.id) {
                    return state.splice(element);
                }   
            });
        default:
            return state;
    }
}
