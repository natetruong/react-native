import React, { Component } from 'react';// this means we are importing React and components from react.  we use {Component} to indicate that.
import Directory from './DirectoryComponent';// this Directory compnent is export from DirectoryComponent.js that we created.
import { CAMPSITES } from '../shared/campsites'; //this campsite component is from campsite.js//dont need it here in part 1 and 2 of navigation.  moved to direcoty
import CampsiteInfo from './CampsiteInfoComponent';


import {View} from 'react-native';

///Navigation installed
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
///

//navigation part 2//
//we just installed drawer navigator.
import Home from './HomeComponent';// we just created a Home Component in HomeComponent.js
import { createDrawerNavigator } from 'react-navigation-drawer';//we need to import this after we installed it.
//navigation part 2//

//workshop week1//
import About from './AboutComponent';
import Contact from './ContactComponent';
//workshop week1//
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

//no longer used after navigation
// class Main extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             campsites: CAMPSITES,
//             selectedCampsite: null
//         };
//     }

//     onCampsiteSelect(campsiteId) {
//         this.setState({selectedCampsite: campsiteId});
//     }
//     render() {
//         return (
//             <View style={{flex: 1}}>
//                 <Directory
//                     campsites={this.state.campsites}
//                     onPress={campsiteId => this.onCampsiteSelect(campsiteId)}
//                 />
//                 <CampsiteInfo
//                     campsite={this.state.campsites.filter(
//                         campsite => campsite.id === this.state.selectedCampsite)[0]}
//                 />
//             </View>
//         );
//     }
// }

// export default Main;

//no longer use after navigation

//navigation code update

//we created a stack navigator and stored it under DirectoryNavigator constant.
//createStackNavigator is a built in fxn with 1 required argument(route conflicts object)/
//route conflict object is where we set available component for the stack.
// in our case we set it to Directory and CampsiteInfo Components that we creacted from DirectoryComponent.js and CampsiteInfoComponent.js
//   Directory: { screen: Directory },
//   CampsiteInfo: { screen: CampsiteInfo }

//initialRouteName set default navigation to Directory.
//defaultNavigationOptions is the setting for header.
const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        CampsiteInfo: { screen: CampsiteInfo }
    }, 
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

//We created createdStackNavigator and stored id as DirectoryNavigator const but now we must pass it to createAppContainer 
//and store it under AppNavigator constant.
//  why do we want to do that?
//createAppContainer will return a react component that handling connecting top level navigator to the 
//react-native application enviroment.
//this is handle back and forth button
//we should always wrap top level navigators(Directory and CampsiteInfor above) like this.


//THIS DirectoryNavigator HAS BEEN SWAPPED OUT WITH MainNavigator IN NAVIGATION PART2.  WE WILL SET HOME SCREEN AS THE TOP 
//LEVEL APPNAVIGATOR.//

// const AppNavigator = createAppContainer(DirectoryNavigator);//simple wrapping syntax let CreateAppContainer connecting top level navigator
// we can render AppNavigator in Main Component because it has both Directory and CampsiteInfo components.

//paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
//remember this is padding for different operating system.  we are using ternary operator.  
// if platform.OS === 'ios'? is true then the padding top will be 0 but if it is false the then we wil use dynamic bar height with this value paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight from expo
//we installed expo with the command expo install expo-constants earlier so we can use this statusBarHeignt constant.

//navigation part2 drawer navigator//
//this Home stack Navigator is similar to Director Navigator. (Home component inported from HomeComonent.js)
//this Navigator only have one screen.  Directory Navigator have to screens Directory and CampsiteInfo.
//we dont have initial route configure because we only have one screen unlike Directory navigator.
const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

//Drawer Navigator.  it look similar to stack navigator syntax.
//createDrawerNavigator takes two arguments.  first are the screen for the drawer and second is the background.
//({Home:...,Directory:..},{drawerBackgroundColor:...})
//we can call MainNavigator or whatever you like.//

// so in this drawer Navigator we have two screens.  Home and Directory.
// when we click on Home it will take us to home and home screen will only have one screen.
//when we click on Directory navigator it will take us to Directory Navigtor and we have two screen to choose there.
//wer are routing them through stack navigtor not home or directoryh themselve. therefore screen:HomeNavigator instead of
//screen:Home.
//
//Contact: { screen: ContactNavigator } we can name it contact or whatever we like here but ContactNavigator have to mwatch with what we created earlier
//

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator },
        About: { screen: AboutNavigator },
        Contact: { screen: ContactNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

const AppNavigator = createAppContainer(MainNavigator)


//navigation part2 drawer navigator//

class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;