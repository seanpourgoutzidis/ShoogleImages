import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        
        //Don't put on parentheses when you pass a function to an event handler
        return (
            
            <div className = "ui segment">
                <form onSubmit = {this.onFormSubmit} className = "ui form">
                    <div className = "field">
                        <label>Shoogle Images</label>
                        <input 
                            type = "text" 
                            value = {this.state.term} 
                            onChange = {(e) => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
            
            /* SINGLE LINE SYNTAX. CAN ALSO WRITE "event" AS "e"
            <div className = "ui segment">
                <form className = "ui form">
                    <div className = "field">
                        <label>Image Search</label>
                        <input type = "text" onChange = {(event) => console.log(event.target.value)}/>
                    </div>
                </form>
            </div>
            */
        );
    }
}

export default SearchBar;