import React, { Component } from 'react'
import { Button } from 'reactstrap'

// Spreadsheets

const PostButton = () => {
    return(
        <div class='row justify-content-center'>
            <Button color='success' size='lg'>Post</Button>
        </div>
    )
}

const TextInput = () => {
    return(
        <div class='row justify-content-center'>
            <textarea
                class='form-control mt-4'
                placeholder={`What's on your mind?`}
                style={{resize: 'none', height: '480px'}}
            >
            </textarea>
        </div>
    )
}

const SubmitButton = () => {
    return(
        <div class='row justify-content-center'>
            <Button class='m4' color='primary'>Submit</Button>
        </div>
    )
}

class TextBox extends Component {
    render() {
        return (
            <div class='container mt-4 mx-auto'>
                <PostButton />
                <TextInput />
                <SubmitButton />
            </div>
        )
    }
}

export default TextBox