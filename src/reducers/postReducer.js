import  { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, UPDATE_ITEM }  from '../actions/types';
// const initialState = {
//     item: []
// }

export default function postReducer(state = [], action){
    switch(action.type) {
        case ADD_ITEM:
          
          return state.concat(action.payload)
        case DELETE_ITEM:
            return state.filter((post)=>post.id !== action.id);
        case EDIT_ITEM:
            return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
        case UPDATE_ITEM:
            console.log('Updating!!!');
            return state.map((post)=>{
              if(post.id === action.id) {
                return {
                   ...post,
                   title:action.payload.title,
                   body:action.payload.body,
                   editing: !post.editing
                }
              } else {
                  return post;
              }
            })
      
        default:
            return state;
    }
}
