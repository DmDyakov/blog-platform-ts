import { render } from '@testing-library/react';
import App from './App';

// window.matchMedia = window.matchMedia || function() {
//   return {
//       matches: false,
//       addListener: function() {},
//       removeListener: function() {}
//   };
// };

test('render App', () => {
  render(<App />);
});
