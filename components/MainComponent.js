import React, { Component } from 'react';// this means we are importing React and components from react.  we use {Component} to indicate that.
import Directory from './DirectoryComponent';// this Directory compnent is export from DirectoryComponent.js that we created.
import { CAMPSITES } from '../shared/campsites'; //this campsite component is from campsite.js
import CampsiteInfo from './CampsiteInfoComponent';


import {View} from 'react-native';


//Just like in react we are setting up a class component called Main. 
//we need constructor because we need to set up state property to hold the CAMPSITES data.  we need to have constructor(props) and super(props)
//in order to have state.
// why are we doing it this way?  we want Main to be the parent component.  it can pass all data to its children components.

// for instance we are passing the entire array of CAMPSITES from campsite.js to Directory Component below.

// right here we are setting up Main as a container component and set it as a parent of a presentational component Directory.

//finally we are exporting Main as default.  exporting a default vs named component has different syntax.  default component doesnt need to have the exact name.???

//react native component part 2.  
// our purpose in this section is to render CampsiteInfo component below Directory component  when
//one of the directory campsite.

//react native component part 2///

//we need to keep tract of which campsite has been selected.  we do this by saving selected data inside Main local state
//we will then use this date to pass on to CampsiteInfor component so that it can display when campsite is clicked.
//Like React, we will set property selectedCampsite to null when nothing is selected.
//we also need to set up an event handler to update selectedCampsite property in our local state wheveever our campsite is slected.
//the event handler will be called onCampsiteSelect.  we will pass in the campsiteId and setState selectedCampsite to the campsiteId


// now we will return CampsiteInfo and Directory but we can not return both.  we have to wrap it in View.

//flex:1 means flexible component.  flex 1 means normal flexible size.

// onPress={campsiteId => this.onCampsiteSelect(campsiteId)} we are not calling onCampsiteSelect method.  we just passing
//the method down to Directory for directory to call.

//we want to pass the entire campsite object with everything (name, image, description...) to camspite attribute props
//so we cannot jsut pass selectedCampsite property because all it got is campsiteId.  look at line 49.
//our solution is to take the entire array of campsites in the local state.  this.state.campsites and filter it to 
//look for the matchin campsite.id that matched the selectedCampsite.
// why index zero?  because filter return an array but we only need the first item in the array becasuethat is the matching object.

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null
        };
    }

    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId});
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Directory
                    campsites={this.state.campsites}
                    onPress={campsiteId => this.onCampsiteSelect(campsiteId)}
                />
                <CampsiteInfo
                    campsite={this.state.campsites.filter(
                        campsite => campsite.id === this.state.selectedCampsite)[0]}
                />
            </View>
        );
    }
}

export default Main;