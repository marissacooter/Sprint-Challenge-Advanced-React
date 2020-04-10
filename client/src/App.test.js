import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  render,
  fireEvent,
  getByText,
  getByTestId,
} from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Testing to confirm that player cards are visible", () => {
  const { getByTestId } = render(<App />);
  getByTestId("Player");
});

test("Testing to see if nav bar is visible", () => {
  const { getByTestId } = render(<App/>);
  getByTestId("Navbar");
});


