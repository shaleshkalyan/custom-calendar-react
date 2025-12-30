import type { Moment } from 'moment';
import type { CalendarDay } from './types';

/**
 * Creates the grid data for the month of the input date.
 * @param date The moment object determining the month/year to display.
 * @param highlightedDate The specific moment object to highlight.
 * @returns An array of 42 CalendarDay objects.
 */
export function getCalendarGrid(date: Moment, highlightedDate: Moment): CalendarDay[] {
  const inputDate = date.clone(); 
  
  const monthStart = inputDate.clone().startOf('month');
  const monthStartDayOfWeek = monthStart.day();
  const leadingDaysCount = monthStartDayOfWeek;

  const totalCells = 42;

  const grid: CalendarDay[] = [];

  const createDay = (m: Moment, isCurrent: boolean): CalendarDay => ({
    date: m,
    isCurrentMonth: isCurrent,
    isHighlighted: m.isSame(highlightedDate, 'day'), 
    key: m.format('YYYY-MM-DD'), 
  });

  let cursor = monthStart.clone().subtract(leadingDaysCount, 'days');
  
  for (let i = 0; i < totalCells; i++) {
    const isCurrentMonth = cursor.month() === monthStart.month();
    grid.push(createDay(cursor.clone(), isCurrentMonth));
    cursor.add(1, 'day');
  }

  return grid;
}

/**
 * Returns the month and year formatted string for the header.
 */
export function getMonthYearLabel(date: Moment): string {
  return date.format('MMMM YYYY');
}

/**
 * Array of day labels.
 */
export const DAY_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];