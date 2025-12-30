import type { CalendarDay } from "../utils/types";

export interface CalendarProps {
  date: Date;
}

export interface CalendarCellProps { 
    day: CalendarDay; 
}