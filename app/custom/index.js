// import CustomRenderer from './CustomRenderer';
import CustomContextPad from './CustomContextPad';
import CustomPalette from './CustomPalette';

export default {
  __init__: [ 'customContextPad', 'customPalette' ], // 'customRenderer'
  // customRenderer: [ 'type', CustomRenderer ],
  customContextPad: [ 'type', CustomContextPad ],
  customPalette: [ 'type', CustomPalette ]
};