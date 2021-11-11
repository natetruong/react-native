import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

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
function CampsiteInfo(props) {
    return <RenderCampsite campsite={props.campsite} />;
}

export default CampsiteInfo;