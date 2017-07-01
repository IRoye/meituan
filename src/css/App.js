import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '*': {
    // create-react-app 会自动加上厂商前缀
    'boxSizing': 'border-box'
  },
  'app': {
    'display': 'flex',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'flexDirection': 'column'
  },
  'app > main-wrap': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'green' }],
    'flexGrow': '1',
    'overflowY': 'scroll'
  },
  'app > header-wrap': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'green' }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    // 不要萎缩
    'flexShrink': '0'
  },
  'app > footer-wrap': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'green' }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    // 不要萎缩
    'flexShrink': '0'
  }
});
