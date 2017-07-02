import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'header': {
    'backgroundColor': '#FFC640',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'justifyContent': 'space-between'
  },
  'header > a': {
    'textAlign': 'center',
    'display': 'flex',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': 'px', 'value': 46 }],
    'justifyContent': 'center'
  },
  // align-items必须用在已有高度的元素上
  'header > a > icon': {
    'height': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    // 这个玩意好有用
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  }
});
