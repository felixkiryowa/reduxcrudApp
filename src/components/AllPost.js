import React from 'react';
import Post from './Post';

import { connect } from 'react-redux';
class AllPost extends React.Component {
  render() {
  const all_posts =  this.props.posts.map((post) => <Post key={post.id} post={post} />);
    return (
    <div>     
      <h1>All Posts</h1>
      {all_posts}
      { console.log(this.props.posts)}
    </div>
    );
   }
}


const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps) (AllPost);