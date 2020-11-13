import React from 'react';
import axios from 'axios';

import Category from './components/Category';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            category: []
        }
    }
    componentDidMount() {
        try {
            axios('https://opentdb.com/api_category.php')
              .then((response) => {
                  this.setState({category: response.data.trivia_categories});
              })
        } catch(e) {
            throw e
        }
    }
    render() {
        return (
            <React.Fragment>
                <Category category={this.state.category} />
            </React.Fragment>
        )
    }
}

export default App;
