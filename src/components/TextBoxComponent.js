import React, { Component } from 'react'
import { Button } from 'reactstrap'

// Spreadsheets

const TextInput = () => {
    return(
        <div class='col-9 mt-2'>
            <input
                type='text'
                class='form-control'
                placeholder='Start typing...'
                aria-label='blog' id='blog' name='blog'
            >
            </input>
            <Button class='col-3 mt-2 align-self-end' color='primary'>Submit</Button>
        </div>
    )
}

class TextBox extends Component {
    render() {
        return (
            <div class='container mt-4 mx-auto'>
                <div class='row d-flex justify-content-center'>
                    <Button color='success' size='lg'>Post</Button>
                    <TextInput />
                    <p class='col p-1'>Click the button to begin writing!</p>
                </div>
            </div>
        )
    }
}

export default TextBox