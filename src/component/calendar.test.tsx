import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Calendar from './calendar';

const firstDate = new Date(2020, 2, 23);

describe('Calendar Component (RTL Integration)', () => {

  it('should render the correct month/year header and day labels', () => {

    render(<Calendar date={firstDate} />);

    expect(screen.getByText('March 2020')).toBeInTheDocument();

    const dayLabels = screen.getAllByRole('columnheader');
    expect(dayLabels.length).toBe(7);
    expect(dayLabels[0]).toHaveTextContent('Su');
    expect(dayLabels[6]).toHaveTextContent('Sa');
  });

  it('should highlight the specific date passed in the date prop', () => {
    render(<Calendar date={firstDate} />);
    
    const highlightedCell = screen.getByLabelText('March 23, 2020'); 
    
    expect(highlightedCell).toBeInTheDocument();
    expect(highlightedCell).toHaveTextContent('23');
    
  });
});