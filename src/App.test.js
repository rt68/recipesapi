import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders navigation bar', () => {
  render(<App />);
  const navBar = screen.getByRole('navigation');
  expect(navBar).toBeInTheDocument();
});

test('renders pantry sidebar', () => {
  render(<App />);
  const sidebar = screen.getByTestId('pantry-sidebar');
  expect(sidebar).toBeInTheDocument();
});

test('renders home page with expected content', () => {
  render(<App />);
  const homePage = screen.getByText(/Welcome to the Home Page/i);
  expect(homePage).toBeInTheDocument();
});

test('renders about page with expected content', () => {
  render(<App />);
  const aboutPage = screen.getByText(/Welcome to the About Page/i);
  expect(aboutPage).toBeInTheDocument();
});

