import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'footer': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#b2b2b2' }],
    'display': 'flex'
  },
  'footer > item': {
    'flexGrow': '1'
  },
  'footer > item > a > div': {
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'footer > item': {
    'display': 'block',
    'textAlign': 'center'
  },
  // 这个地方是个大大的疑问；
  'footer > item div': {
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'lineHeight': [{ 'unit': 'px', 'value': 11 }]
  },
  'footer > item div': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'footer > item a': {
    'display': 'block',
    'textDecoration': 'none',
    // 为什么宽度和高度都是  100%
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  }
});
