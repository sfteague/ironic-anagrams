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
    color:"black",
    alignSelf:'flex-start',
    marginLeft: 10,
    marginRight: 10
  },
  bodyText2: {
    flexDirection: 'column',
    position:'relative',
    fontSize: 14,
    fontWeight: '400',
    color:"black",
    alignSelf:'flex-start',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  statCatBox1: {
    backgroundColor: '#aed6f1',
    paddingBottom: 10,
    paddingTop: 10
  },
  statCatBox2: {
    backgroundColor: '#d5f5e3',
    paddingBottom: 10,
    paddingTop: 10
  },
  statCatBox3: {
    backgroundColor: '#f9e79f',
    paddingBottom: 10,
    paddingTop: 10
  },
  statCatBox4: {
    backgroundColor: '#f1948a',
    paddingBottom: 10,
    paddingTop: 10
  },
  mainHead: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    flexDirection: 'row',
    marginBottom: 10
  },
  categoryHead: {
    flex: .2,
    marginTop: 5,
    color: 'red'
  },
  numView: {
    fontSize: 55,
    marginLeft: 10
  }
});

module.exports = styles;