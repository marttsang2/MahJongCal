import * as React from 'react';
import {
    View,
    Text,
    Switch,
    Button,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {DataTable} from 'react-native-paper';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import Setting from './Setting';

export default class HomeScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            min: [
                3, 8
            ],
            table: [],
            switchValue: true,
            switchInit: true
        }
    }

    toggleSwitch = (value) => {
        this.setState({switchValue: value})
    }

    toggleInitSwitch = (value) => {
        this.setState({switchInit: value})
    }

    render() {
        const Foldup = () => {
            if (this.state.switchValue) 
                return ('半辣上')
            else 
                return ('辣辣上')
        }

        const InitScore = () => {
            if (this.state.switchInit) 
                return ('起番分數:4')
            else 
                return ('起番分數:8')
        }

        const Fan = () => {
            this.state.table = [];
            if (this.state.switchInit) {
                var num = 4;
                var num_even = 4;
                var num_odd = 4;
            } else {
                var num = 8;
                var num_even = 8;
                var num_odd = 8;
            }
            if (!this.state.switchValue) {
                for (var i = this.state.min[0]; i <= this.state.min[1]; i++) {
                    if (i >= 3) {
                        this
                            .state
                            .table
                            .push({fan: i, score: num_even});

                        num_even *= 2;
                    } else if (i < 3) {
                        this
                            .state
                            .table
                            .push({
                                fan: i,
                                score: i * (num_even / 4)
                            });

                    }
                }
            } else {
                for (var i = this.state.min[0]; i <= this.state.min[1]; i++) {
                   if (i < 3) {
                        this
                            .state
                            .table
                            .push({
                                fan: i,
                                score: i *(num / 4)
                            });
                    }
                    else if (i%2==0){
                        num_even = Math.pow(2,(i/2)+1)* num/4
                        this.state
                            .table
                            .push({
                                fan: i,
                                score: num_even
                            });
                    }
                    else if (i%2!=0){
                        if(i==3)
                            num_odd = num;
                        else    
                            num_odd = num*3*Math.pow(2,(i-5)/2);
                        this.state
                            .table
                            .push({
                                fan: i,
                                score: num_odd
                            });
                    }
                }
            }
            
            return (

                <ScrollView>
                    {this
                        .state
                        .table
                        .map((data, i) => {
                            return (
                                <View
                                    style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop:10
                                }}
                                    key={i}>
                                    <View
                                        style={{
                                        flex: 1,
                                        alignItems: 'center'
                                    }}>
                                        <Text
                                            style={{
                                            fontSize: 20,
                                            fontWeight: '500'
                                        }}>{data.fan}</Text>
                                    </View>

                                    <View
                                        style={{
                                        flex: 1,
                                        alignItems: 'center'
                                    }}>
                                        <Text
                                            style={{
                                            fontSize: 20,
                                            fontWeight: '500'
                                        }}>{data.score}</Text>
                                    </View>
                                </View>

                            )
                        })
}
                </ScrollView>
            )
        }
        var {width, height} = Dimensions.get('window')
        return (
            <View
                style={{
                flex: 1,
                alignItems: 'center',
                marginTop: 10
            }}>
                <View
                    style={{
                    flexDirection: 'row',
                    margin: 20,
                }}>
                    <View style={{
                        flex: .7,
                        alignSelf:'center'
                    }}>
                        <Text
                            style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            
                        }}><Foldup/></Text>
                    </View>
                    <View style={{
                        
                    }}>
                        <Switch value={this.state.switchValue} onValueChange={this.toggleSwitch}/>
                    </View>

                </View>
                <View
                    style={{
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: width
                }}></View>
                <View
                    style={{
                    flexDirection: "row",
                    margin: 20
                }}>
                    <View style={{
                       flex: .7,
                       alignSelf:'center'
                    }}>
                        <Text
                            style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}><InitScore/></Text>
                    </View>

                    <View style={{
                        
                    }}>
                        <Switch value={this.state.switchInit} onValueChange={this.toggleInitSwitch}/>
                    </View>

                </View>
                <View
                    style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: width
                }}></View>
                <MultiSlider
                    values={[this.state.min[0], this.state.min[1]]}
                    onValuesChange={(min) => this.setState({min: min})}
                    sliderLength={280}
                    min={1}
                    max={10}
                    step={1}
                    allowOverlap={false}
                    snapped
                    minMarkerOverlapDistance={1}/>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style={{
                        flex: .3
                    }}>
                        <Text
                            style={{
                            fontSize: 20
                        }}>起番:{this.state.min[0]}</Text>
                    </View>
                    <View style={{
                        flex: -.3
                    }}>
                        <Text
                            style={{
                            fontSize: 20
                        }}>爆番:{this.state.min[1]}</Text>
                    </View>

                </View>
                <TouchableOpacity
                    style={{margin:10}}
                    activeOpacity={1}
                    onPress={() => this.props.navigation.replace('分數表', {table: this.state.table,color: this.state.color})}>
                    <Text
                        style={{
                        alignSelf: 'center',
                        backgroundColor: "white",
                        width:100,
                        fontSize: 20,
                        borderRadius: 10,
                        padding: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        elevation: 5,
                        shadowOpacity: 0.25,
                        alignSelf:'center',
                        textAlign: 'center'
                    }}>開枱</Text>
                </TouchableOpacity>
                
                    <View style={{
                        flex: 0,
                        flexDirection:'row',
                    }}>

                        <View
                            style={{
                            flex: 1,
                            alignItems:'center'
                        }}>
                            <Text>番數</Text>
                        </View>
                        <View
                            style={{
                            flex: 1,
                            alignItems:'center'
                        }}>
                            <Text>食糊分數</Text>
                        </View>
                    </View>
               
                <View
                    style={{
                    marginTop: 10,
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    width: width
                }}></View>
                <ScrollView style={{
                    width: width
                }}>
                    <Fan/>
                    <View style={{height:40}}></View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    }
})