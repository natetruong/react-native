import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
//navigation part 1//
import { Component } from 'react';
import { CAMPSITES } from '../shared/campsites';


//SECOND//
// from the props campsite object we are only interested in campsite object so we are pulling it out and destructured it
// as a parameter of RenderCampsite
//if campsite object is false then we will return an empty view.  otherwise we will return a <Card> component.
// <Card> is from react native element.
// <Card> has featuredTitle props--which we set it to campsite name by campsite.name.
//image is also a prop of Card component.  we set image prop to the require fxn

//margin: 10 is an object so we need double curly braces inside jsx.
function RenderCampsite({campsite}) {
    if (campsite) {
        return (
            <Card 
                featuredTitle={campsite.name}
                image={require('./images/react-lake.jpg')}
            >
                <Text style={{margin: 10}}>
                    {campsite.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}
// FIRST //the purpose of this CampsiteInfo component is to return a card with an impage and description.
//we created CampsiteInfo as a presentatonal component.  we passed props to RenderCampsite fxn component so that
//can iterate through the array of object.

// WE are pulling campsite object from CampsiteInfo props and sent it to RenderCampsite fxn.

//part 1 and 2 components//
// function CampsiteInfo(props) {
//     return <RenderCampsite campsite={props.campsite} />;
// }

//part 1 and 2 components//
//part1 navigation... change fxnal component to class component to hold state data.
//samething static title for the screen Campsite Info.

//we need to change how we pass the campsite object in render method to make it work with static navigationOptions.
//we set up a parameter to hold the id of the campsite being passed. -->   const { navigate } = this.props.navigation;
// we are accessing that campsite here through navigation props.  navigation props are passed automatically to all
//component that were set as screens.

//we are receiving that parameter by storing it in constant campsiteId = this.props.navigation.getParam('campsiteId');
//
////after we get campsiteId we are going to filter through our campsite array in our local state to get the matching object.
//and we know filter alway return a new array so we are going to add index 0 to get the first object in the array which also is the first mathing object.
//

// wer were passing campsite as props to RenderCampsite in component part 1 and 2 but now
//we can passing in the campsite as object.  the new object campsite that we just created from filter method.
//  before we are passig it as RenderCampsite camspite={props.campsite} 
class CampsiteInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    static navigationOptions = {
        title: 'Campsite Information'
    }

    render() {
        const campsiteId = this.props.navigation.getParam('campsiteId');
        const campsite = this.state.campsites.filter(campsite => campsite.id === campsiteId)[0];
        return <RenderCampsite campsite={campsite} />;
    }
}


export default CampsiteInfo;