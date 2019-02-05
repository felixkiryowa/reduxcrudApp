import React  from 'react';
import PropTypes from 'prop-types'
import { connect} from 'react-redux';
import { postArticle } from '../actions/postActions'

class PostForm extends React.Component {

      constructor() {
          super();
          this.state = {
              title : '',
              body: ''
          }
      }

      handleChange(event) {
          const {name, value} = event.target;
          this.setState({
              [name]:value
          })
      }

      handleSubmit(event) {
         event.preventDefault();
         const post_data = {
            id:new Date(),
            title:this.state.title,
            body:this.state.body
         }
         this.props.postArticle(post_data);
      }

        render() {
            return (
                <div>
                    <h1>Create Post</h1>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input name="title" value={this.state.title} required type="text" placeholder="Enter Post Title" onChange={this.handleChange.bind(this)} /><br /><br />
                        <textarea  name="body" value={this.state.body} required rows="5" cols="28" placeholder="Enter Post" onChange={this.handleChange.bind(this)} /><br /><br />
                        <button>Post</button>
                    </form>
                </div>
            );
        }    
    }

PostForm.propTypes = {
      postArticle:PropTypes.func.isRequired     
}

export default connect(null, {postArticle})(PostForm);