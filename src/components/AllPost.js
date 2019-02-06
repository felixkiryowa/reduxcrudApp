import React from 'react';
import EditComponent from './EditComponent';
import Post from './Post';

import { connect } from 'react-redux';
class AllPost extends React.Component {
  render() {
  // const all_posts =  this.props.posts.map((post) => <Post key={post.id} post={post} />);
  const all_posts =this.props.posts.map((post) => {
    return <div key={post.id}>
            {
              post.editing ? <EditComponent post={post} key={post.id} /> :
              <Post key={post.id} post={post} />
            }
        </div>
  })  
  return (
    <div>     
      <h1 className="post_heading">All Posts</h1>
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