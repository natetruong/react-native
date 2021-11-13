import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { Text} from 'react-native';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    static navigationOptions = {
        title: 'Contact Us'
    }
//we dont creacte this here because we want to use this in MainCOmonent.  we are going to created it there and link it there to MainNavigator or Drawer Navigator
    // const ContactNavigator = createStackNavigator(
    //     {
    //         Contact: { screen: Contact }
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

    //double curly braces is card syntax for using css margin
    render() {
        
        return(
            <ScrollView>
                <Card title="Contact Us" wrapperStyle={{margin: 20}}>
                    <Text >
                        1 Nucamp Way
                    </Text>
                    <Text>
                        Seattle, WA 98001
                    </Text>
                    <Text style={{marginBottom: 10}}>
                         U.S.A.
                    </Text>
                    <Text >
                    Phone: 1-206-555-1234
                    </Text>
                    <Text>
                    Email: campsites@nucamp.co
                    </Text>
                </Card>

            </ScrollView>
        );
    }

}

export default Contact;