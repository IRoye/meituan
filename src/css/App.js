import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'html': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
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
    'flexGrow': '1',
    'overflowY': 'scroll'
  },
  'app > header-wrap': {
    'display': 'flex',
    'height': [{ 'unit': 'px', 'value': 50 }],
    // 不要萎缩
    'flexShrink': '0'
  },
  'app > footer-wrap': {
    'height': [{ 'unit': 'px', 'value': 50 }],
    // 不要萎缩
    'flexShrink': '0'
  },
  'a': {
    'WebkitTapHighlightColor': 'rgba(0,0,0,0)'
  },
  'slider-wrap': {
    'height': [{ 'unit': 'px', 'value': 100 }],
    'position': 'relative',
    'overflow': 'hidden'
  },
  '#slider': {
    'position': 'absolute',
    'display': 'flex',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  '#slider slide': {
    'flexShrink': '0',
    'verticalAlign': 'center',
    'height': [{ 'unit': 'px', 'value': 100 }],
    'lineHeight': [{ 'unit': 'px', 'value': 100 }],
    'backgroundColor': '#d3d3d3',
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'white' }],
    // 暂时设置为这个像素值
    'width': [{ 'unit': 'px', 'value': 320 }],
    // 目前使用的是border-box
  },
  // 需要在活动的最外层再包裹一层元素
});
