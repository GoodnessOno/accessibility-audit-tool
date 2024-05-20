import { render, screen } from '@testing-library/react';
import App from './App';

test('renders URL input form', () => {
  render(<App />);
  
  // Check if input field for URL is present
  const urlInput = screen.getByPlaceholderText('Enter URL');
  expect(urlInput).toBeInTheDocument();
  
  // Check if submit button is present
  const submitButton = screen.getByRole('button', { name: 'Audit' });
  expect(submitButton).toBeInTheDocument();
});

