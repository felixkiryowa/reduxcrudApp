import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteArticle } from '../actions/postActions';
import  { editArticle } from '../actions/postActions';


class Post extends React.Component {

  render() {
  return (
    <div className="post">
      <h2 className="post_title">{this.props.post.title}</h2>
      <p className="post_message">{this.props.post.body}</p>
      <div className="control-buttons">
          <button className="edit"
          onClick = {
            () => this.props.editArticle(this.props.post.id)
          }
            >Edit</button>
          <button className="delete"
          onClick= {
              ()=> this.props.deleteArticle(this.props.post.id)
            }
          >
          Delete</button>
      </div>
      
      
    </div>
  );
 }
}

Post.propTypes = {
    deleteArticle:PropTypes.func.isRequired,
    editArticle: PropTypes.func.isRequired
}

export default connect(null, {deleteArticle, editArticle})(Post);