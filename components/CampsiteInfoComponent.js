import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
//navigation part 1//
import { Component } from 'react';
import { CAMPSITES } from '../shared/campsites';


//week 2 icons, favorites, and comments//
import { ScrollView, FlatList } from 'react-native';// we need ScrollView to wrap two returned fxns.  and flatlist to hold an array
//need to add this to local state.
import { COMMENTS } from '../shared/comments';

import { Icon } from 'react-native-elements'; //for favorite icon








//week 2 icon...//
//SECOND//
// from the props campsite object we are only interested in campsite object so we are pulling it out and destructured it
// as a parameter of RenderCampsite
//if campsite object is false then we will return an empty view.  otherwise we will return a <Card> component.
// <Card> is from react native element.
// <Card> has featuredTitle props--which we set it to campsite name by campsite.name.
//image is also a prop of Card component.  we set image prop to the require fxn

//margin: 10 is an object so we need double curly braces inside jsx.

//why did we code icon here but not the class componenet itself or anywhere else.  
//this is a place to code the icon because this is where it is rendering campsite.  we want the favorite icon to appear at each campsite.
function RenderCampsite(props) {

    const {campsite} = props;//we don not destructure campsite anymore because we need props to get favorite icon.

    if (campsite) {
        return (
            <Card 
                featuredTitle={campsite.name}
                image={require('./images/react-lake.jpg')}>
                <Text style={{margin: 10}}>
                    {campsite.description}
                </Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
        );
    }
    return <View />;
}

//why do we have to destructure it?  why cant we just enter comments?  well comments is being pass as props from const comments of CampsiteInfo class component
//we can pass it in as props.comments not comment directly.  but we can destructure it to get the array of comments only.  
//comments prop will be used in FlatList data because FlatList is made to handle data in a form of array.

//we want to render the comments in a Card component so that all of it appear in a card.  therefore we are using Card component.
//we do not need render keyword since it is a functional component not class component.
//again comments is an array which FlatList is perfect for.
// all of the view component will be in Flatlist which will be in the Card component.
function RenderComments({comments}) {

    const renderCommentItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Comments'>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}//this will connect data to renderCommentItem so that we can pass in built in props of FlatList item which is from data.
                keyExtractor={item => item.id.toString()}//we need a unique key to keep track of the array.  we are going to us the id in the array.  why item?  it is built in prop from data={comments}
            />
        </Card>
    );
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
            campsites: CAMPSITES,
            comments: COMMENTS,
            favorite: false
        };
    }

    markFavorite() {
        this.setState({favorite: true});
    }

    static navigationOptions = {
        title: 'Campsite Information'
    }

    render() {
        const campsiteId = this.props.navigation.getParam('campsiteId');//we took campsiteId from Directory Component.
        const campsite = this.state.campsites.filter(campsite => campsite.id === campsiteId)[0];
        const comments = this.state.comments.filter(comment => comment.campsiteId === campsiteId);//week 2 added for comments.  campsiteId is the const campsiteId
        //we are passing in const comments and const campsite to the two fxn below in ScrollView.
        //WHAT WE ARE DOING HERE IS DISPLAYING COMMENTS THAT MATCHES CAMPSITE DISPLAYING.
        //we can get the id of the comment and filter for a match with the displayed campsite.  in our case the the current display campsite is 
        // the object campsiteId aka const campsiteId line 115 above.
        // why dont we add the index of 0 just to get the first item in the return filtered array like in campsite.
        //because we want all comments for the campsite not just one comments.
        //look at two RenderCampsite and RenderComments for details.  they are different because one display one campsite and other display all comments
        return (
            <ScrollView>
                <RenderCampsite campsite={campsite}
                    favorite={this.state.favorite}
                    markFavorite={() => this.markFavorite()}
                />
                <RenderComments comments={comments} />
            </ScrollView>
        );
    }
}


export default CampsiteInfo;