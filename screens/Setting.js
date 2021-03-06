import * as React from 'react';
import {
    View,
    Text,
    Button,
    Picker,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Alert,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

import {Ionicons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            User: {
                user1: 0,
                user2: 0,
                user3: 0,
                user4: 0,
                color1: 0,
                color2: 0,
                color3: 0,
                color4: 0
            },
            Userdata: {
                user1: 0,
                user2: 0,
                user3: 0,
                user4: 0
            },
            color: [],
            usercolor: {
                user1: 0,
                user2: 0,
                user3: 0,
                user4: 0
            },
            Score: [],
            win: 1,
            lose: 1,
            point: 1,
            user: '',
            Round: 1,
            WindCount: 0,
            Wind: [
                "東", "南", "西", "北"
            ],
            modalVisible: false,
            modalVisible2: false,
            modalVisible3: false,
            modalVisible4: false,
            AlertVisible: false,
            JohnLin: false,
            handlemodal: false,
            handlemodal2: false,
            handlemodal3: false,
            JohnLinCount: 0,
            color: [
                'black', 'green', 'red'
            ],
            userdatacolor: {
                user1: 0,
                user2: 0,
                user3: 0,
                user4: 0
            }
        }
    }

    ChangeValue(a, b, p) {
        if (a == b) {
            return (alert('不能輸入相同玩家'))
        }
        let User = Object.assign({}, this.state.User);
        switch (Number(a)) {
            case 1:
                if (this.state.handlemodal2 || this.state.handlemodal3) {
                    User.user1 -= -3 * p;
                    User.color1 += 1;
                    this.state.Userdata.user1 -= -3 * p;
                    break;
                }
                User.user1 -= -p;
                User.color1 += 1;
                this.state.Userdata.user1 -= -p;
                break;
            case 2:
                if (this.state.handlemodal2 || this.state.handlemodal3) {
                    User.user2 -= -3 * p;
                    User.color2 += 1;
                    this.state.Userdata.user2 -= -3 * p;
                    break;
                }
                User.user2 -= -p;
                User.color2 += 1;
                this.state.Userdata.user2 -= -p;
                break;
            case 3:
                if (this.state.handlemodal2 || this.state.handlemodal3) {
                    User.user3 -= -3 * p;
                    User.color3 += 1;
                    this.state.Userdata.user3 -= -3 * p;
                    break;
                }
                User.user3 -= -p;
                User.color3 += 1;
                this.state.Userdata.user3 -= -p;
                break;
            case 4:
                if (this.state.handlemodal2 || this.state.handlemodal3) {
                    User.user4 -= -3 * p;
                    User.color4 += 1;
                    this.state.Userdata.user4 -= -3 * p;
                    break;
                }

                User.user4 -= -p;
                User.color4 += 1;
                this.state.Userdata.user4 -= -p;
                break;
            default:
                this.setState(User);
        }

        switch (Number(b)) {
            case 1:
                User.user1 -= p;
                User.color1 += 2;
                this.state.Userdata.user1 -= p;
                break;
            case 2:
                User.user2 -= p;
                User.color2 += 2;
                this.state.Userdata.user2 -= p;
                break;
            case 3:
                User.user3 -= p;
                User.color3 += 2;
                this.state.Userdata.user3 -= p;
                break;
            case 4:
                User.user4 -= p;
                User.color4 += 2;
                this.state.Userdata.user4 -= p;
                break;
            default:
                this.setState(User);
        }
        if (this.state.handlemodal3) {
            if (a != 1) {
                User.user1 -= 3 * p;
                User.color1 += 2;
                this.state.Userdata.user1 -= 3 * p;
            } else if (a != 2) {
                User.user2 -= 3 * p;
                User.color2 += 2;
                this.state.Userdata.user2 -= 3 * p;
            } else if (a != 3) {
                User.user3 -= 3 * p;
                User.color3 += 2;
                this.state.Userdata.user3 -= 3 * p;
            } else if (a != 4) {
                User.user4 -= 3 * p;
                User.color4 += 2;
                this.state.Userdata.user4 -= 3 * p;
            }
        }

        if (this.state.handlemodal2) {
            if (a != 1) {
                User.user1 = -p;
                User.color1 += 2;
                this.state.Userdata.user1 -= p;
            }
            if (a != 2) {
                User.user2 = -p;
                User.color2 += 2;
                this.state.Userdata.user2 -= p;
            }
            if (a != 3) {
                User.user3 = -p;
                User.color3 += 2;
                this.state.Userdata.user3 -= p;
            }
            if (a != 4) {
                User.user4 = -p;
                User.color4 += 2;
                this.state.Userdata.user4 -= p;
            }
        }

        this.setState(User);
        this
            .state
            .Score
            .push(User);

        if (Number(a) == 5 || this.state.Round != this.state.win) {
            this.setState({JohnLin: false});
            this.setState({JohnLinCount: 0})
            if (this.state.Round != 4) {
                this.state.Round -= -1;
            } else {
                this.state.Round = 1;
                if (this.state.WindCount == 3) {
                    this.state.WindCount = 0;
                    alert('打完四圈')

                } else {
                    this.state.WindCount += 1;
                }
            }
        } else {
            this.setState({JohnLin: true});
            this.state.JohnLinCount -= -1;
        }

        if (this.state.Userdata.user1 == 0) 
            this.state.userdatacolor.user1 = 0;
        else if (this.state.Userdata.user1 > 0) 
            this.state.userdatacolor.user1 = 1;
        else if (this.state.Userdata.user1 < 0) 
            this.state.userdatacolor.user1 = 2;
        
        if (this.state.Userdata.user2 == 0) 
            this.state.userdatacolor.user2 = 0;
        else if (this.state.Userdata.user2 > 0) 
            this.state.userdatacolor.user2 = 1;
        else if (this.state.Userdata.user2 < 0) 
            this.state.userdatacolor.user2 = 2;
        
        if (this.state.Userdata.user3 == 0) 
            this.state.userdatacolor.user3 = 0;
        else if (this.state.Userdata.user3 > 0) 
            this.state.userdatacolor.user3 = 1;
        else if (this.state.Userdata.user3 < 0) 
            this.state.userdatacolor.user3 = 2;
        
        if (this.state.Userdata.user4 == 0) 
            this.state.userdatacolor.user4 = 0;
        else if (this.state.Userdata.user4 > 0) 
            this.state.userdatacolor.user4 = 1;
        else if (this.state.Userdata.user4 < 0) 
            this.state.userdatacolor.user4 = 2;
        }
    
    handleJohn = (text) => {
        if (text == 1) {
            this.setState({John: "1號位"})
        } else if (text == 2) {
            this.setState({John: "2號位"})
        } else if (text == 3) {
            this.setState({John: "3號位"})
        } else if (text == 4) {
            this.setState({John: "4號位"})
        }
    }

    render() {
        var {width} = Dimensions.get('window')
        const {table, username} = this.props.route.params;
        return (
            <View
                style={{
                flex: 1,
                backgroundColor: 'white'
            }}>
                <View
                    style={{
                    flex: .3,
                    marginTop: 40
                }}>
                    <View
                        style={{
                        alignSelf: 'center',
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            flex: .3
                        }}>
                            <Text style={styles.getStartedText}>莊家:</Text>
                        </View>
                        <View
                            style={{
                            flex: .3,
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <Text style={styles.getStartedText}>{username[this.state.Round - 1]}</Text>
                            <View>{this.state.JohnLin
                                    ? (
                                        <Text
                                            style={{
                                            alignSelf: 'center',
                                            fontSize: 20,
                                            marginLeft: 10,
                                            color: 'white',
                                            backgroundColor: 'red'
                                        }}>{this.state.JohnLinCount}連莊</Text>
                                    )
                                    : null}
                            </View>
                        </View>

                    </View>
                    <View
                        style={{
                        alignSelf: 'center',
                        flexDirection: 'row',
                        marginTop: 40,
                        flex: 1
                    }}>
                        <View style={{
                            flex: .3
                        }}>
                            <Text style={styles.getStartedText}>
                                {this.state.Wind[this.state.WindCount]}圈
                            </Text>
                        </View>

                        <View style={{
                            flex: .3
                        }}>
                            <Text style={styles.getStartedText}>
                                {this.state.Wind[this.state.Round - 1]}局
                            </Text>
                        </View>
                    </View>

                </View>
                <View style={{
                    flex: .5
                }}>
                    <View
                        style={{
                        flexDirection: 'row'
                    }}>
                        <View
                            style={{
                            flex: 1,
                            margin: 20
                        }}>
                            <Text
                                style={{
                                alignSelf: 'center',
                                fontSize: 20,
                                color: this.state.color[this.state.userdatacolor.user1]
                            }}>{username[0]}: {this.state.Userdata.user1}</Text>
                        </View>

                        <View
                            style={{
                            flex: 1,
                            margin: 20
                        }}>
                            <Text
                                style={{
                                alignSelf: 'center',
                                fontSize: 20,
                                color: this.state.color[this.state.userdatacolor.user2]
                            }}>{username[1]}: {this.state.Userdata.user2}</Text>
                        </View>
                    </View>

                    <View
                        style={{
                        flexDirection: 'row'
                    }}>
                        <View
                            style={{
                            flex: 1,
                            margin: 20
                        }}>
                            <Text
                                style={{
                                alignSelf: 'center',
                                fontSize: 20,
                                color: this.state.color[this.state.userdatacolor.user3]
                            }}>{username[2]}: {this.state.Userdata.user3}</Text>
                        </View>

                        <View
                            style={{
                            flex: 1,
                            margin: 20
                        }}>
                            <Text
                                style={{
                                alignSelf: 'center',
                                fontSize: 20,
                                color: this.state.color[this.state.userdatacolor.user4]
                            }}>{username[3]}: {this.state.Userdata.user4}</Text>
                        </View>
                    </View>

                </View>
                {/* Modal 1 to 3 */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                    this.setState({modalVisible: false})
                }}>
                    <TouchableOpacity
                        style={styles.container}
                        activeOpacity={1}
                        transparent={true}
                        onPressOut={() => {
                        this.setState({modalVisible: false})
                    }}>
                        <View>
                            <TouchableWithoutFeedback>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>邊個贏錢</Text>
                                    <View
                                        style={{
                                        marginTop: 5,
                                        borderBottomColor: 'black',
                                        borderBottomWidth: .9,
                                        width: 150
                                    }}></View>
                                    <TouchableOpacity
                                        onPress={() => {
                                        this.setState({win: 1});
                                        this.setState({modalVisible: false});
                                        this.setState({modalVisible2: true})
                                    }}>
                                        <Text style={styles.modalUserText}>{username[0]}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                        this.setState({win: 2});
                                        this.setState({modalVisible: false});
                                        this.setState({modalVisible2: true})
                                    }}>
                                        <Text style={styles.modalUserText}>{username[1]}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                        this.setState({win: 3});
                                        this.setState({modalVisible: false});
                                        this.setState({modalVisible2: true})
                                    }}>
                                        <Text style={styles.modalUserText}>{username[2]}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                        this.setState({win: 4});
                                        this.setState({modalVisible: false});
                                        this.setState({modalVisible2: true})
                                    }}>
                                        <Text style={styles.modalUserText}>{username[3]}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                        Alert.alert('流局', "確定流局?", [
                                            {
                                                text: "OK",
                                                onPress: () => {
                                                    this.setState({modalVisible: false});
                                                    this.ChangeValue(5, 0, 0);
                                                    this.handleJohn(this.state.Round);
                                                }
                                            }, {
                                                text: "Cancel",
                                                onPress: () => {
                                                    this.setState({modalVisible: false});
                                                }
                                            }
                                        ])
                                    }}>
                                        <Text style={styles.modalUserText}>流局</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableOpacity>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible3}
                    onRequestClose={() => {
                    this.setState({modalVisible3: false})
                }}>
                    <TouchableOpacity
                        style={styles.container}
                        activeOpacity={1}
                        transparent={true}
                        onPressOut={() => {
                        this.setState({modalVisible3: false})
                    }}>
                        <View>
                            <TouchableWithoutFeedback>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>邊個輸錢</Text>
                                    <View
                                        style={{
                                        marginTop: 5,
                                        borderBottomColor: 'black',
                                        borderBottomWidth: .9,
                                        width: 150
                                    }}></View>
                                    <TouchableOpacity
                                        onPress={() => {
                                        this.setState({lose: 1});
                                        this.setState({modalVisible4: true});
                                        this.setState({modalVisible3: false});
                                    }}>
                                        <Text style={styles.modalUserText}>{username[0]}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                        this.setState({lose: 2});
                                        this.setState({modalVisible4: true});
                                        this.setState({modalVisible3: false});
                                    }}>
                                        <Text style={styles.modalUserText}>{username[1]}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                        this.setState({lose: 3});
                                        this.setState({modalVisible4: true});
                                        this.setState({modalVisible3: false});
                                    }}>
                                        <Text style={styles.modalUserText}>{username[2]}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                        this.setState({lose: 4});
                                        this.setState({modalVisible4: true});
                                        this.setState({modalVisible3: false});
                                    }}>
                                        <Text style={styles.modalUserText}>{username[3]}</Text>
                                    </TouchableOpacity>
                                </View>

                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableOpacity>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible4}
                    onRequestClose={() => {
                    this.setState({modalVisible4: false})
                }}>
                    <TouchableOpacity
                        style={styles.container}
                        activeOpacity={1}
                        transparent={true}
                        onPressOut={() => {
                        this.setState({modalVisible4: false})
                    }}>
                        <View>
                            <TouchableWithoutFeedback>

                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>番數</Text>
                                    <View
                                        style={{
                                        marginTop: 5,
                                        borderBottomColor: 'black',
                                        borderBottomWidth: .9,
                                        width: 150
                                    }}></View>
                                    {table.map((data, i) => {
                                        return (
                                            <TouchableOpacity
                                                key={i}
                                                onPress={() => {
                                                Alert.alert('確定分數', (this.state.handlemodal
                                                    ? ('贏家:' + username[this.state.win - 1] + " 輸家:" + username[this.state.lose - 1] + " [" + data.score + "]")
                                                    : ("")) + (this.state.handlemodal2
                                                    ? ('贏家:' + username[this.state.win - 1] + " 自摸 [" + data.score + "]")
                                                    : ("")) + (this.state.handlemodal3
                                                    ? ('贏家:' + username[this.state.win - 1] + " 輸家:" + username[this.state.lose - 1] + " 包自摸 [" + data.score + "]")
                                                    : ("")), [
                                                    {
                                                        text: "OK",
                                                        onPress: () => {
                                                            this.setState({modalVisible4: false});
                                                            this.ChangeValue(this.state.win, this.state.lose, data.score);
                                                            this.handleJohn(this.state.Round);
                                                            this
                                                                .props
                                                                .navigation
                                                                .navigate('分數記錄', {
                                                                    User: this.state.Score,
                                                                    Username: username
                                                                });
                                                            this
                                                                .props
                                                                .navigation
                                                                .goBack();
                                                        }
                                                    }, {
                                                        text: "Cancel",
                                                        onPress: () => {
                                                            this.setState({modalVisible4: false});
                                                        }
                                                    }
                                                ])
                                            }}>
                                                <Text style={styles.modalUserText}>{data.fan}
                                                    番 {data.score}</Text>
                                            </TouchableOpacity>
                                        )

                                    })}
                                </View>

                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableOpacity>
                </Modal>
                {/* Modal 1 to 3 */}

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible2}
                    onRequestClose={() => {
                    this.setState({modalVisible2: false})
                }}>
                    <TouchableOpacity
                        style={styles.container}
                        activeOpacity={1}
                        transparent={true}
                        onPressOut={() => {
                        this.setState({modalVisible2: false})
                    }}>
                        <View>
                            <TouchableWithoutFeedback>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>點贏法</Text>
                                    <View
                                        style={{
                                        marginTop: 5,
                                        borderBottomColor: 'black',
                                        borderBottomWidth: .9,
                                        width: 150
                                    }}></View>
                                    <TouchableOpacity
                                        onPress={() => {
                                        this.setState({modalVisible3: true});
                                        this.setState({modalVisible2: false});
                                        this.setState({handlemodal: true});
                                    }}>
                                        <Text style={styles.modalUserText}>出銃</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                        this.setState({modalVisible2: false});
                                        this.setState({handlemodal2: true});
                                        this.setState({modalVisible4: true});
                                    }}>
                                        <Text style={styles.modalUserText}>自摸</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                        this.setState({modalVisible3: true});
                                        this.setState({modalVisible2: false});
                                        this.setState({handlemodal3: true});
                                    }}>
                                        <Text style={styles.modalUserText}>包自摸</Text>
                                    </TouchableOpacity>

                                </View>

                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableOpacity>
                </Modal>

                <View
                    style={{
                    position: "absolute",
                    width: 80,
                    height: 80,
                    backgroundColor: 'white',
                    bottom: 10,
                    alignSelf: 'center',
                    borderRadius: 80
                }}></View>
                <TouchableOpacity
                    style={{
                    position: "absolute",
                    bottom: 20,
                    alignSelf: 'center'
                }}
                    activeOpacity={1}
                    onPress={() => {
                    this.setState({
                        modalVisible: true
                    }, this.setState({handlemodal: false,handlemodal2: false, handlemodal3: false}))
                }}>

                    <View >
                        <LinearGradient
                            start={[.9, .5]}
                            colors={['#56CFF3', '#32C1FF', '#00B3FF']}
                            style={styles.touchStyle}>
                            <View
                                style={{
                                flexDirection: 'row'
                            }}>

                                <Ionicons name="md-add-circle-outline" color="#fff" size={30}/>
                            </View>
                        </LinearGradient>
                    </View>

                </TouchableOpacity>
                <View
                    style={{
                    flex: 1,
                    position: "absolute",
                    bottom: -10,
                    width: width,
                    height: 70,
                    zIndex: -1,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        flex: 1
                    }}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                            this
                                .props
                                .navigation
                                .navigate('分數記錄', {
                                    User: this.state.Score,
                                    Username: username
                                });
                        }}>
                            <LinearGradient
                                style={{
                                height: 60,
                                justifyContent: 'center'
                            }}
                                start={[.9, .5]}
                                colors={['#56CFF3', '#32C1FF', '#00B3FF']}>

                                <Ionicons
                                    style={{
                                    alignSelf: 'center'
                                }}
                                    name="md-menu"
                                    color="#fff"
                                    size={40}/>

                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                            Alert.alert('重新開始牌局', '你的分數會重新計算喔', [
                                {
                                    text: "OK",
                                    onPress: () => this
                                        .props
                                        .navigation
                                        .replace('分數設定')
                                }, {
                                    text: "Cancel"
                                }
                            ])
                        }}>

                            <LinearGradient
                                style={{
                                height: 60,
                                justifyContent: 'center'
                            }}
                                start={[.9, .5]}
                                colors={['#56CFF3', '#32C1FF', '#00B3FF']}>
                                <Ionicons
                                    style={{
                                    alignSelf: 'center'
                                }}
                                    name="md-arrow-round-back"
                                    color="#fff"
                                    size={40}/>

                            </LinearGradient>

                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: "transparent",
        color: "#000000"
    },

    getStartedText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        lineHeight: 30,
        textAlign: 'center'
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    modalUserText: {
        fontSize: 20,
        marginTop: 15
    },
    modalView: {
        alignSelf: 'center',
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 50,
        padding: 10,
        elevation: 2
    },
    touchStyle: {
        alignSelf: 'center',
        width: 60,
        height: 60,
        backgroundColor: "#00C4FF",
        borderRadius: 30,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    touchText: {
        fontSize: 20,
        color: "white",
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})