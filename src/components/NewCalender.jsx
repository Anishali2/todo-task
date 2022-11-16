import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";

import dayjs from "dayjs";



export default function NewCalender() {
  const [selectedDate, setSelectedDate] = useState(
    dayjs(''),
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Date is: ", date);
  };

  return (
    // <MuiThemeProvider>
      <MuiPickersUtilsProvider  >
        <Paper style={{ overflow: "hidden" }}>
          <Calendar date={selectedDate} onChange={handleDateChange} />
        </Paper>
      </MuiPickersUtilsProvider>
    // </MuiThemeProvider>
  );
}
