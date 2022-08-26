import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';


class App extends React.Component {
    
    state = { images: [] }; 

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: { query: term }
        })

        this.setState({ images: response.data.results });
        
        /* Another way of getting the updates called a "promise" but is a little less intuitive
        
        .then((response) => {
            console.log(response.data.results);
        });*/
    }


    render () {
        //Don't have to call it onSubmit
        return (
            <div className = "ui container" style = {{ marginTop: '10 px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit} />
                <ImageList  images = {this.state.images} />
            </div>
        );
    }
}

export default App;