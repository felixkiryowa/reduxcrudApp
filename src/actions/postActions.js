import  {ADD_ITEM, DELETE_ITEM}  from './types';


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