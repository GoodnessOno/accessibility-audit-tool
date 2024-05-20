import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import URLInput from './URLInput';

test('renders input and button', () => {
  const { getByPlaceholderText, getByText } = render(<URLInput onSubmit={() => {}} />);
  expect(getByPlaceholderText('Enter URL')).toBeInTheDocument();
  expect(getByText('Audit')).toBeInTheDocument();
});

test('submits the form', () => {
  const handleSubmit = jest.fn();
  const { getByPlaceholderText, getByText } = render(<URLInput onSubmit={handleSubmit} />);
  const input = getByPlaceholderText('Enter URL');
  fireEvent.change(input, { target: { value: 'https://example.com' } });
  fireEvent.click(getByText('Audit'));
  expect(handleSubmit).toHaveBeenCalledWith('https://example.com');
});
