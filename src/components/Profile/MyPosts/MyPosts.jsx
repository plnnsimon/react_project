import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import classes from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = React.memo(props => {

    let postsElements = 
        [...props.posts]
            .reverse()
            .map( p => <Post message={p.message} likesCount={p.likesCount} />  );

    let newPostElement = React.createRef();
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    } 

    return (
        <div className={classes.postBlock}>
            <div>
                <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost} />
                <div className={classes.posts}>
                    { postsElements }
                </div>
            </div>
        </div>
    )

});  

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
                <div>
                    <Field name='newPostText' component={Textarea}
                            placeholder={'Post message'}
                            validate={[required,maxLength10 ]}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                
                
            </form>
    )
}

let AddNewPostFormRedux = reduxForm ({form: 'ProfileAddNewPostForm'}) (AddNewPostForm);

export default MyPosts