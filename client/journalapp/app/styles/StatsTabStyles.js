//StatsTabStyles.js

import {
  StyleSheet,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  //write styles here
  container: {
    flex: 1,
    marginTop: 20,
    paddingTop: 56,
    paddingRight: 12,
    paddingLeft: 12,
    backgroundColor: '#f5f6f6',
    width: Dimensions.get('window').width
  },
  bodyText: {
    flexDirection: 'column',
    position:'relative',
    fontSize: 14,
    fontWeight: '400',
    color:"#666666",
    alignSelf:'center'
  },
  header: {}
});

module.exports = styles;