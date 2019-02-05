import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteArticle } from '../actions/postActions';


class Post extends React.Component {

  render() {
  return (
    <div>
      <h2>{this.props.post.title}</h2>
      <p>{this.props.post.body}</p>
      <button >Edit</button>
      <button 
      onClick= {
          ()=> this.props.deleteArticle(this.props.post.id)
        }
      >
      Delete</button>
    </div>
  );
 }
}

Post.propTypes = {
    deleteArticle:PropTypes.func.isRequired
}

export default connect(null, {deleteArticle})(Post);