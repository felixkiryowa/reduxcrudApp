import  {ADD_ITEM, DELETE_ITEM, EDIT_ITEM, UPDATE_ITEM}  from './types';


export const postArticle =  (postedData) => {

      return {
           type:ADD_ITEM,
           payload:postedData
      }
}



export const deleteArticle =  (post_id) => {
    console.log(post_id);
    return {
         type:DELETE_ITEM,
         id:post_id
    }
}


export const editArticle =  (post_id) => {
     console.log(post_id);
     return {
          type:EDIT_ITEM,
          id:post_id
     }
 }

 export const updateArticle =  (editedData, post_id) => {
     console.log(editedData);
     return {
          type:UPDATE_ITEM,
          id:post_id,
          payload:editedData
     }
 }