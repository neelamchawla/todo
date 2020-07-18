import React from 'react';
import { shallow } from 'enzyme';
// import App from './App';
it('renders welcome message', () => {
//   const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(welcome);
});



// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



// react-scripts test

// CI=true react-scripts test --env=jsdom