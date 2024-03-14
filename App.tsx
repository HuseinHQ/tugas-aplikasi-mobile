/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

// export default function App() {
//   return (
//     <View>
//       <Text style={{color: 'blue'}}>Hello World</Text>
//       <Text
//         style={{
//           fontSize: 28,
//           fontWeight: 'bold',
//           fontStyle: 'italic',
//           textAlign: 'center',
//         }}>
//         Hello World 2
//       </Text>
//       <Text
//         style={{
//           color: 'red',
//           fontSize: 28,
//           textDecorationLine: 'line-through',
//           textAlign: 'left',
//         }}>
//         Rp20.000,00
//       </Text>
//       <Text
//         style={{
//           color: 'rgb(0, 0, 0)',
//           fontSize: 28,
//           textDecorationLine: 'underline',
//           textAlign: 'right',
//         }}>
//         Rp10.000,00
//       </Text>
//     </View>
//   );
// }

export default function App() {
  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontStyle: 'normal',
          textAlign: 'right',
        }}>
        <Text style={{fontSize: 26, color: 'blue'}}>Hello</Text>
        <Text style={{fontSize: 46, color: 'pink'}}>World</Text>
      </Text>
      <View
        style={{
          flex: 0.5,
          // width: 100,
          // height: 100,
          backgroundColor: 'grey',
          margin: 20,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          flexDirection: 'column-reverse',
        }}>
        <Text>Hello1</Text>
        <Text>Hello2</Text>
        <Text>Hello3</Text>
      </View>
    </View>
  );
}
