import React, { Component } from 'react'
import { Button } from 'reactstrap'

// Spreadsheets

const PostButton = () => {
    return(
        <div className='row justify-content-center'>
            <Button onClick={() => console.log(`Post button clicked!`)} color='success' size='lg'>Post</Button>
        </div>
    )
}

const TextInput = () => {
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
}

class TextBox extends Component {

    render() {
        return (
            <div className='container mt-4 mx-auto'>
                <PostButton />
                <TextInput />
            </div>
        )
    }
}

export default TextBox