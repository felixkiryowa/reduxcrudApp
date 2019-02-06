import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateArticle }  from '../actions/postActions'


class EditComponent extends React.Component {

    constructor () {
        super();

        this.state = {
           title:'',
           body:''
        }
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }

    handleEdit(event) {
        event.preventDefault();
        const updatedpost = {
            id:this.props.post.id,
            title:this.state.title,
            body:this.state.body
        }

        this.props.updateArticle(updatedpost, this.props.post.id);
     
        
    }

    render () {

        return (
            <div className="post">
                <h1>Edit Article Data</h1>
                <hr></hr>
                <form className="form" onSubmit={this.handleEdit.bind(this)}>
                    <input required type="text" name="title" onChange = { this.handleChange.bind(this)}
                    defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" name="body" onChange= { this.handleChange.bind(this)} defaultValue={this.props.post.body} cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Update</button>
                </form>
          </div>
        )
    }

    }

    EditComponent.propTypes = {
        updateArticle:PropTypes.func.isRequired
    }


export default connect(null, {updateArticle})(EditComponent);