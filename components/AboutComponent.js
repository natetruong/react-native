import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { Text} from 'react-native';
import {PARTNERS} from '../shared/partners';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

//read from top to bottom so put this on top so about component can use it
//can we remove the parameter for this Mission fxn since we dont need it.  it will return the same card no matter what argument is enter?
//no props is passed into Mission fxn from About Component.
//it works without parameter 'item' or any parameter really.  the fxn return the same data no matter what when call upon.
function Mission() {
    
        return (
            <Card title="Our Mission">
                <Text style={{margin:10}}>
                     We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
                </Text>
            </Card>

        );
    }
    





class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }
    static navigationOptions = {
        title: 'About Us'
    }
//we dont creacte this here because we want to use this in MainCOmonent.  we are going to created it there and link it there to MainNavigator or Drawer Navigator
    // const AboutNavigator = createStackNavigator(
    //     {
    //         About: { screen: About }
    //     },
    //     {
    //         defaultNavigationOptions: {
    //             headerStyle: {
    //                 backgroundColor: '#5637DD'
    //             },
    //             headerTintColor: '#fff',
    //             headerTitleStyle: {
    //                 color: '#fff'
    //             }
    //         }
    //     }
    // );
    
    render() {
        const renderPartner = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
                />
            );
        };
        return(
            <ScrollView>
                <Mission />
                <Card title='Community Parner'>
                    <FlatList
                    data={this.state.partners}//we want the data to be the array of partners so we give it the whole array
                    renderItem={renderPartner}//renderItem is a built in props that connect us to Listitem
                    keyExtractor={item => item.id.toString()}// keyExtractor is always looking for index but we dont have index so we specified it to id
                    />
                </Card>
            </ScrollView>
            
        );
    }

}





export default About;