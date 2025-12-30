
import styled, { css } from 'styled-components';

export const CalendarContainer = styled.div`
  font-family: Arial, sans-serif;
  border: 1px solid #363738ff;
  border-radius: 8px;
  padding: 16px;
  // max-width: 500px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin: 20px auto;
  background-color: #363738ff;
`;

export const Header = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #d0d2d8ff;
  margin-bottom: 15px;
  background-color: #363738ff;
`;


const GridBase = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;

export const DayLabels = styled.div`
  ${GridBase}
  font-weight: 500;
  color: #d0d2d8ff;
  font-size: 0.85rem;
  padding-bottom: 8px;
  margin-bottom: 4px;
`;

export const CalendarGrid = styled.div`
  ${GridBase}
`;

interface CellProps {
  $isInactive: boolean;
  $isHighlighted: boolean;
}

export const Cell = styled.div.attrs<CellProps>(props => ({
    role: "gridcell" 
}))<CellProps>`
  padding: 4px 4px;
  aspect-ratio: 1 / 1;  
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition: background-color 0.1s;
  color: #d0d2d8ff;

  ${props => props.$isInactive && css`
    color: #545252ff;
  `}

  ${props => props.$isHighlighted && css`
    background-color: #d0d2d8ff;
    color: white;
    font-weight: 700;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    color: #363738ff; 
  `}
`;