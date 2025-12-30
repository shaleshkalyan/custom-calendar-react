import React from "react";
import type { CalendarCellProps } from "./types";
import { Cell } from "./style";

export const CalendarCell: React.FC<CalendarCellProps> = React.memo(({ day }) => {

  return (
    <Cell 
      $isInactive={!day.isCurrentMonth}
      $isHighlighted={day.isHighlighted}
      aria-label={day.date.format('LL')} 
    >
      {day.date.date()} 
    </Cell>
  );
});

CalendarCell.displayName = 'CalendarCell';