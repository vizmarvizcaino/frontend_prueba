import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sistema de datos de los alumnos/i);
  expect(linkElement).toBeInTheDocument();
});
