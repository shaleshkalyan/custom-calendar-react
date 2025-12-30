import React, { useMemo } from 'react';
import moment from 'moment';
import { getCalendarGrid, getMonthYearLabel, DAY_LABELS } from '../utils/date';
import { CalendarProps } from './types';
import { CalendarDay } from '../utils/types';
import { CalendarContainer, CalendarGrid, DayLabels, Header } from './style';
import { CalendarCell } from './calendarCell';


export const Calendar: React.FC<CalendarProps> = ({ date }) => {
  
  const { monthYearLabel, gridDays } = useMemo(() => {
    
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return { 
            monthYearLabel: 'Invalid Date', 
            gridDays: [] as CalendarDay[] 
        };
    }
    
    const momentDate = moment(date);
    
    return {
      monthYearLabel: getMonthYearLabel(momentDate),
      gridDays: getCalendarGrid(momentDate, momentDate), 
    };
  }, [date]); 

  if (!gridDays.length) {
      return <div style={{ color: 'red', textAlign: 'center' }}>Invalid date provided.</div>;
  }

  return (
    <CalendarContainer role="table" aria-label={`Calendar for ${monthYearLabel}`}>
      
      <Header>
        {monthYearLabel}
      </Header>

      <DayLabels role="rowgroup">
        {DAY_LABELS.map((label) => (
          <div key={label} role="columnheader">{label}</div>
        ))}
      </DayLabels>

      <CalendarGrid role="rowgroup">
        {gridDays.map((day) => (
          <CalendarCell key={day.key} day={day} /> 
        ))}
      </CalendarGrid>
    </CalendarContainer>
  );
};

export default Calendar;