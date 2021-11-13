import React, { Component } from 'react';
import { View, Text } from 'react-native';
//we installed draw navigator so that we have the slide over sidebar.  expo install react-navigation-drawer  but this 
//will be in Main Component
//like before we are using static navigationOptions to title the screen 'Home'

//this is how we set up screen title in react native
// static navigationOptions = {
//     title: 'Home'
// }

//for now it is just a place holder.  we will add more contents later.
class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <View>
                <Text>Home Component</Text>
            </View>
        );
    }
}

export default Home;