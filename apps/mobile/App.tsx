import { registerRootComponent } from 'expo';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Setlists from './src/Screens/Setlists';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <Setlists />
    </PaperProvider>
  );
}

export default registerRootComponent(App);
