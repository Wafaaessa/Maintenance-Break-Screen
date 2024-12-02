import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders Maintenance component', () => {
    render(<App />);
    
    const maintenanceElement = screen.getByText(/Maintenance/i);
    
    expect(maintenanceElement).toBeInTheDocument();
  });
});
