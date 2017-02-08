jest.mock('react-router-dom/Link');

import React from 'react';
import renderer from 'react-test-renderer';

import About from './About';

it('About has correct contents', () => {
  const component = renderer.create(
		<About />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});