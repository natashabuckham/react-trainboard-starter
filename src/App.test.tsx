import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders stations link', () => {
    render(<App />);
    const linkElement = screen.getByText(/stations/i);
    expect(linkElement).toBeInTheDocument();
});
