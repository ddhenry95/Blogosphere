//Frameworks & Libraries
import React, { Component } from 'react'

// Spreadsheets

// Components
import Header from '../components/HeaderComponent'
import TextBox from './TextBoxComponent'
import Footer from '../components/FooterComponent'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            bio: '',
            img: ''
        }
    }

    render() {
        return(
            <div>
                <Header />
                <TextBox />
                <Footer />
            </div>
        )
    }
}

export default Main