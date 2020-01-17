import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('renders', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders strike', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/strike/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders ball', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/ball/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders out', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/out/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("limits on balls outs and strikes", () => {
  test('three strikes', () => {
    const expected = 0;
    const actual = strikeCount;
    expect(actual).toBeLessThan(3);
  });

  test('three outs', () => {
    const expected = 3;
    const actual = outCount;
    expect(actual).toBeLessThan(3);
  });

  test('four balls', () => {
    const expected = 3;
    const actual = ballCount;
    expect(actual).toBeLessThan(4);
  });
});