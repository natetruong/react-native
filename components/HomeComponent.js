import React, { Component } from 'react';
import { View, Text } from 'react-native';
//we installed draw navigator so that we have the slide over sidebar.  expo install react-navigation-drawer  but this 
//will be in Main Component

//Home Navigation//
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';  //we just downloaded these 3 files into shared folder.
import { PROMOTIONS } from '../shared/promotions';//now we have to import them in order to use them
import { PARTNERS } from '../shared/partners';
//home navigation//

//like before we are using static navigationOptions to title the screen 'Home'

//this is how we set up screen title in react native
// static navigationOptions = {
//     title: 'Home'
// }

//Home Navigation//

//RenderItem fxn if(item) is true then we will return Card.
function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/react-lake.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

//home navigation//


//for now it is just a place holder.  we will add more contents later.
//we are adding constructor to hold these 3 new data in local states.
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }
//ScrollView is similar to Flatlist.  it can be use to render group or list of items.
//but the different between them is that ScrollView loads all of its components at once.  
//FlatList uses Lazy Loading.-->only part of list is rendered at a time.  meaning?
//part thats on screen or about to be on screen will be loaded but parts that have been scrolled past are removed from memory.
//
//So FlatList is a better way of loading because it saved memory.

//longer list use FlatList.

//Okay.  finally i understood why we always created an extra component to render instead of rendering right in the 
//return of render method.
// for instance, we want title, image and description for each of the item.  
//it is easier to create a different fxn to help us and render than trying to render it directly from return.
//  we are going to create a RenderItem fxn and pass 'item' props aka attribute in react to it.  we can call this attribute whatever we want
// and jsut like before.  we are going to use filter method to find out which item in our campsite, promtions, partners
//array that are stored in our local state has featured.  if it does then return an array with the object.
//however we only want 1 object so we are using index of 0 to pull that object out of the array.  
// this is similar to saying if campsite or promotion or partner has campsite.featured = true then return that.
//if not then dont return it.
// this syntax this.state.campsites.filter means take the campsites data from local state and filter it
//this syntax campsite => campsite.featured means look into individual object in the campsites array that has featured
//or featured: true. and return that in a new filter array.
//but we only want 1 object instead of the array so we are going to add the index of 0 at the end so it takes the first item in the new returned array.
//

///???????????/
//why it does not render two object when the array is returned two object?
//when i removed the index of 0 of campsite array and changed on of the CAMPSITES object from false to true
// it should return a new array with two objects. and it is 
//however Home Component only render one of the object from the new array.  
// i had to add another line <RenderItem item={this.state.campsites.filter(campsite => campsite.featured)[0]}/>
//and changed the index of 0 to 1 for Home Comp to render?  why??
  //          ????????????????
////????????????????        
    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.campsites.filter(campsite => campsite.featured)[0]}
                />
                <RenderItem 
                    item={this.state.campsites.filter(campsite => campsite.featured)[1]}
                />
                <RenderItem 
                    item={this.state.promotions.filter(promotion => promotion.featured)[0]}
                />
                <RenderItem 
                    item={this.state.partners.filter(partner => partner.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;