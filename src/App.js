import El from './El.js';
import Title from './components/Title.js';
import Timer from './components/Timer.js';

const App = () => (
  new El(
    'div',
    [
      Title(),
      Timer()
    ]
  )
);

export default App;