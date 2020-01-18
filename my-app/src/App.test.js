import React from 'react';
import { render } from '@testing-library/react';
import App, {out, ball, strike}from './App'

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
    const expected = 3;
    const actual = strikeCount;
    expect(actual).toBeLessThan(3);
  });

  test('three outs', () => {
    const expected = 3;
    const actual = outCount;
    expect(actual).toBeLessThan(3);
  });

  test('four balls', () => {
    const expected = 4;
    const actual = ballCount;
    expect(actual).toBeLessThan(4);
  });
});

describe("adding function of balls outs and strikes", () => {
  test('out adds one to outs', () => {
    let actual;
    let expected;
    actual = out(1);
    expected = 2;
    expect(actual).toBe(expected);
    expect(actual).not.toBeGreaterThan(3);

    expect(out(1)).toBe(2);
  });

  test('strike adds one to strikes', () => {
    let actual;
    let expected;
    actual = strike(1);
    expected = 2;
    expect(actual).toBe(expected);
    expect(actual).not.toBeGreaterThan(3);

    expect(strike(1)).toBe(2);
  });

  test('ball adds one to balls', () => {
    let actual;
    let expected;
    actual = ball(1);
    expected = 2;
    expect(actual).toBe(expected);
    expect(actual).not.toBeGreaterThan(4);

    expect(ball(1)).toBe(2);
  });
});