import React from 'react';//we need to import React from react so that codes belong to react can work
import { FlatList } from 'react-native';// we are using FlatList component from react-native.  and this is a named component hence the curly braces syntax.
import { ListItem } from 'react-native-elements';// if this were a default component then we dont need the curly braces.  see how App.js importing Main.
//navigation//
import { Component } from 'react';
import { CAMPSITES } from '../shared/campsites';// because we need store state data CAMPSITEs we need to change the 
//fxnal component Directory to a Class Component
//Navigation//
//Flatlist is like ul from HTML and ListItem is li but they dont have the exact correlation.  just for our own analogy
// FlatList will be wrapped around all ListItem

//we will create a Directory component which inherited props from its parents component Main.
//we will create a fxnal component here.
//component part1 and 2//

// function Directory(props) {
// //we are setting this up as a const and make it an arrow fxn.
// //and the paramenters for this arrow fxn is an object that get pass in by default from FlatList react-native component.
// //but we only care about item property of the object.  we will desctructor syntax to focus on item instead of the whole object that being pass in from FlatList.
// //
// //FlatList method is similar to map method whcih iterate through every item in the list in the array in it data props. data={props.campsites}
// //then it will run the renderItem props aka renderItem={renderDirectoryItem} on every single item from props.campsites.

// //and last step is renderDirectoryItem fxn accessing current iterated item.

// //we will us ListItem to hold the iterated item.  
// // we will use props from ListItem which is from React-native-element.  title and subtitle is self explantory.
// //leftAvatar requires an object.  therefore we used 2 sets of curly braces.  
// //1st embedded javascript inside jsx and 
// //2nd set defines object literal. second curly braces is the object
// // this object of leftAvatar take a property of source.  we set source value to a nodejs fxn called require.  in required fxn we define the location of the image.

// //react-native component part 2// passing Onpress prop from Main component.

// //ListItem comes with a built in onPress prop similar to react onClick event handler.
// //when this component is press the fxn will fire.
// //so using this onPress prop to trigger or onCampsiteSelect event handler which we pass it on as props from Main 
// //we pass in item from renderDirectoryItem.  which will pass the same campsite.id to onSelectedCampsite method.  it will
// //updated selectedCampsite with this item.id.
//     const renderDirectoryItem = ({item}) => {
//         return (
//             <ListItem
//                 title={item.name}
//                 subtitle={item.description}
//                 onPress={() => props.onPress(item.id)}
//                 leftAvatar={{ source: require('./images/react-lake.jpg')}}
//             />
//         );
//     };
// //we are returning a FlatList from this fxnal component.  
// //1st.  we are telling FlatList comp where the data is from & FlatList is expecting an array.  
// //therefore we write it like this with data=props.campsites but we need to add curly braces because we are passing the props in as object array

// // next props will specify how to render each item in the list.  we will provide a call back fxn name renderDirectoryItem which we created above.
// //renderItem={renderDirectoryItem}

// //**//keyExtract is another props that we need.  this is a built in react-native comonent? just like renderItem? and data?
// //just like react every list need a key so that react can track the list and here is the same concept.  react-native need a keyExtractor.

// //because in each list of the campsite array there is an id that we placed in there to keep track of the item we are going to use it.
// //we are tell keyExtractor to grab the id from each item by item=item.id.toString().  we know it is expecting a string we are going to convert the id numbers to strings.

// // now each item has a uniqure key thanks to keyExtractor.
//     return (
//         <FlatList
//             data={props.campsites}
//             renderItem={renderDirectoryItem}
//             keyExtractor={item => item.id.toString()}
//         />
//     );
// }

// export default Directory;

// component part 1 and 2//

//Navigation Part 1//
//changed to class component to store state data.

//Directory is the text that will appear on the header title on MainComponent.js because we configure it via
//static navigationOptions.  static is the keyword which set the method on the class itself not the object instantiated from the class.
//hence static navigationOptions.  it will entitled header as Directory.  you can call it whatever and it will appear as whatever.

//navigation props.  
// docs states that each screen component in the app is embedded with navigation prop automatically.
//navigation props has various fxns that dispatch navigation action on route's router.
//example this.props.navigation 
//
//having read that and realized that we set the Directory Component as a screen in the DirectoryNavigation Component in line 99 on Main Component.
//Directory automatically receive navigation prop and all built in fxns listed in docs.
// nevigation'goback,isFocused...

//but we only need navigation fxn so we will destructure to {navigate} instead of props.navigate

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    static navigationOptions = {
        title: 'Directory'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                    leftAvatar={{ source: require('./images/react-lake.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;

//Navigation part 1 and 2//