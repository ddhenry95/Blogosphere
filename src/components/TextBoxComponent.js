import React, { Component } from 'react'
import { Button } from 'reactstrap'

// Check line 41 for a comment on my current situation.

const onPostClick = () => {
    console.log(`Post clicked!`)
}

const PostButton = () => {

    return(
        <div className='row justify-content-center'>
            <Button onClick={onPostClick()} color='success' size='lg'>Post</Button>
        </div>
    )
}

const TextInput = (postClicked) => {

    if (postClicked) {
        return(
            <div className='row justify-content-center'>
                <textarea
                    className='col form-control mt-4'
                    placeholder={`What's on your mind?`}
                    style={{resize: 'none', height: '480px', paddingBottom: '20px'}}
                >
                </textarea>
                <Button onClick={() => console.log(`Submit button clicked!`)} color='primary'>Submit</Button>
            </div>
        )
    } else {
        return (
            <div>Click the button to proceed!</div>
        )
    }

}

/* I think by passing [postClick], I can check to make sure it reads
whether or not it's true, and that should help me toggle the text input.
I feel like I'm approaching this wrong because the text box is being
displayed without the button being clicked. */

class TextBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postClick: false,
            submitClick: false
        }
    }

    render() {
        return (
            <div className='container mt-4 mx-auto'>
                <PostButton />
                <TextInput postClicked={this.state.postClick}/>
            </div>
        )
    }
}

export default TextBox