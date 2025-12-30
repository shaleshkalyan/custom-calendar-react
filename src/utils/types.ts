import type { Moment } from "moment";

export type CalendarDay = {
  date: Moment;
  isCurrentMonth: boolean;
  isHighlighted: boolean;
  key: string;
};