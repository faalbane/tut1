// Import a library to help make a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native'; //Text, View
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Make a component
class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount() {

        console.log('componentWillMount in AlbumList');

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data })); //.then(response => console.log(response));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} /> //key id
        );
    }

    render() {

        console.log(this.state);


        
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        );
    }
};


// Make the component available to other parts of the app
export default AlbumList;