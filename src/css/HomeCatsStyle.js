import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'nav-items-row > a': {
    'width': [{ 'unit': '%H', 'value': 0.25 }],
    'flexGrow': '1'
  },
  'nav-items-row': {
    'display': 'flex',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'justifyContent': 'space-around'
  },
  'nav-items-row svg': {
    'width': [{ 'unit': 'px', 'value': 25 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'fill': 'white'
  },
  'nav-items-row icon': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': 'px', 'value': 45 }],
    'height': [{ 'unit': 'px', 'value': 45 }],
    'borderRadius': '50%',
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'alignItems': 'center'
  },
  'nav-items-row snack icon': {
    'backgroundColor': '#78B0FF',
    'display': 'flex',
    'justifyContent': 'center'
  },
  'nav-items-row diner icon': {
    'backgroundColor': '#fb7071',
    'display': 'flex',
    'justifyContent': 'center'
  },
  'nav-items-row dinner icon': {
    'backgroundColor': '#9ade55',
    'display': 'flex',
    'justifyContent': 'center'
  },
  'nav-items-row express icon': {
    'backgroundColor': '#f378da',
    'display': 'flex',
    'justifyContent': 'center'
  },
  'nav-items-row fruit icon': {
    'backgroundColor': '#ffaf48',
    'display': 'flex',
    'justifyContent': 'center'
  },
  'nav-items-row nosh icon': {
    'backgroundColor': '#ffce56',
    'display': 'flex',
    'justifyContent': 'center'
  },
  'nav-items-row wine icon': {
    'backgroundColor': '#ffaf48',
    'display': 'flex',
    'justifyContent': 'center'
  },
  'nav-items-row westernFood icon': {
    'backgroundColor': '#60d5e2',
    'display': 'flex',
    'justifyContent': 'center'
  },
  'nav-items-row shop icon': {
    'backgroundColor': '#78B0FF',
    'display': 'flex',
    'justifyContent': 'center'
  },
  'nav-items-row  icon': {
    'backgroundColor': '#78B0FF',
    'display': 'flex',
    'justifyContent': 'center'
  }
});
