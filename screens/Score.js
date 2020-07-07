import * as React from 'react';
import {DataTable, Colors} from 'react-native-paper';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default class LinksScreen extends React.Component {
  constructor(){
    super();
    this.state={
      color: ['black','green','red']
    }
  }
  render() {
    const {User,Username} = this.props.route.params;
    var {width, height} = Dimensions.get('window');
  return (
    <ScrollView>
      <View style={{flex:1,flexDirection:'row',marginTop:5}}>
        <View style={{flex:1}}><Text style={styles.textstyle}>{Username[0]}</Text></View>
        <View style={{flex:1}}><Text style={styles.textstyle}>{Username[1]}</Text></View>
        <View style={{flex:1}}><Text style={styles.textstyle}>{Username[2]}</Text></View>
        <View style={{flex:1}}><Text style={styles.textstyle}>{Username[3]}</Text></View>
      </View>

      <View
        style={{
        borderBottomColor: 'black',
        marginTop:15,
        borderBottomWidth: .58,
        width: width
      }}></View>

    {
    User.map((data,i)=>{
      return(
        <View key={i}>
        <View style={{flex:1,flexDirection:'row'}}>
          <View style={{flex:1}}><Text style={{color:this.state.color[data.color1],textAlign:'center',fontWeight:'bold',fontSize:17,marginTop:10}}>{data.user1}</Text></View>
          <View style={{flex:1}}><Text style={{color:this.state.color[data.color2],textAlign:'center',fontWeight:'bold',fontSize:17,marginTop:10}}>{data.user2}</Text></View>
          <View style={{flex:1}}><Text style={{color:this.state.color[data.color3],textAlign:'center',fontWeight:'bold',fontSize:17,marginTop:10}}>{data.user3}</Text></View>
          <View style={{flex:1}}><Text style={{color:this.state.color[data.color4],textAlign:'center',fontWeight:'bold',fontSize:17,marginTop:10}}>{data.user4}</Text></View>
      </View>
      <View
            style={{
            borderBottomColor: 'black',
            marginTop:15,
            borderBottomWidth: .5,
            width: width
      }}></View>
      </View>
      )
    })}
    </ScrollView>
  )
  }
}

const styles = StyleSheet.create({
  textstyle:{
    textAlign:'center',fontWeight:'bold',fontSize:15,marginTop:10
  }
});
