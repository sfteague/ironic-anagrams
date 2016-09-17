//StatsTab.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Dimensions,
  Image
} from 'react-native';

import styles from '../styles/StatsTabStyles.js';

export default class StatsTab extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      username: ''
    };
    AsyncStorage.getItem('@MySuperStore:username', (err, username) => {
      this.setState({
        username: username
      });
    });
  };

  componentDidMount() {
    this.props.getStats(); //will need to pass username?
  }

  render() {
    let msg7day, msg30day, msg365day, msgStreakSelf, msgStreakFriends;
    let last7dayPercent = this.props.entriesLast7Days / 7;
    
    if (last7dayPercent === 0) {
      msg7day = "That's a big goose egg, buster!";
    } else if (last7dayPercent * 100 < 50) {
      msg7day = "Pick up the pace! Your future self will thank you!";
    } else if (last7dayPercent * 100 < 80) {
      msg7day = "Good work! See if you can log those memories every day!";
    } else if (last7dayPercent * 100 < 100) {
      msg7day = "Great work! You almost made an entry every day!"
    } else {
      msg7day = "Perfect score! Amazing! You now have a wealth of memories to reference."
    }

    return (
      <View style={ styles.container }>
        <Text style={ styles.mainHead }>Track your progress here!</Text>
        <View style={ styles.statCatBox1 }>
          <Text style={ styles.numView }>{this.props.entriesLast7Days}/7</Text>
          <Text style={ styles.bodyText }>You have made {this.props.entriesLast7Days} entries in the last 7 days.</Text>
          <Text style={ styles.bodyText2 }>{ msg7day }</Text>
        </View>
        <View style={ styles.statCatBox2 }>
          <Text style={ styles.numView }>{this.props.entryStreakSelf}</Text>
          <Text style={ styles.bodyText }>Your streak of consecutive daily entries is {this.props.entryStreakSelf}.</Text>
        </View>
        <View style={ styles.statCatBox3 }>
          <Text style={ styles.numView }>{this.props.entryStreakFriendsBiggest}</Text>
          <Text style={ styles.bodyText }>{this.props.entryStreakFriendsBiggestName} has the best streak among your friends
            with {this.props.entryStreakFriendsBiggest} consecutive daily entries.
          </Text>
        </View>
        <View style={ styles.statCatBox4 }>
          <Text style={ styles.numView }>{this.props.entryStreakFriendsSmallest}</Text>
          <Text style={ styles.bodyText }>{this.props.entryStreakFriendsSmallestName} is trailing your friend group
            with {this.props.entryStreakFriendsSmallest} consecutive daily entries.
          </Text>
        </View>
      </View>
    )
  }//end render
}