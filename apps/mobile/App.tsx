import { registerRootComponent } from 'expo';
import { TailwindProvider, useTailwind } from 'tailwind-rn';
import { Text } from 'react-native';
import utilities from './tailwind.json';

function MyComponent() {
  const tailwind = useTailwind();

  return <Text style={tailwind('text-blue-600')}>Hello world</Text>;
}


const App = function () {
  return (
    <TailwindProvider utilities={utilities}>
      <MyComponent />
    </TailwindProvider>
  );
};

export default registerRootComponent(App);
