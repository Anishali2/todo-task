import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker, DateTimePickerTabs } from '@mui/x-date-pickers/DateTimePicker';
import { Box, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
export default function Calender() {
  const [value, setValue] = React.useState(
    dayjs(''),
  );
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  // const materialTheme = createTheme({
  //   overrides: {
  //     MuiPickersToolbar: {
  //       toolbar: {
  //         backgroundColor: "black",
  //       },
  //     },
  //     MuiPickersCalendarHeader: {
  //       switchHeader: {
  //         // backgroundColor: lightBlue.A200,
  //         // color: "white",
  //       },
  //     },
  //     MuiPickersDay: {
  //       day: {
  //         color: "blue",
  //       },
  //       daySelected: {
  //         backgroundColor: "pink",
  //       },
  //       dayDisabled: {
  //         color: "brown",
  //       },
  //       current: {
  //         color: "red",
  //       },
  //     },
  //     MuiPickersModal: {
  //       dialogAction: {
  //         color: "gray",
  //       },
  //     },
  //   },
  // })
  const calendarSx = {
    "& .MuiPickersDay-dayWithMargin": {
      borderRadius: "4px",
      // outline: "1px solid black",
      backgroundColor: "green",
      margin: "0px 1px 0 0",

    },
   
    "& .MuiDayPicker-weekContainer": { margin: "1px" }
  };
  return (
    <div>
  
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
    
        <DatePicker
          label="Date&Time picker"
          open={true}
          value={value}
          onChange={handleChange}
          disableOpenPicker
          views={['day']}
          className='mt-4'
          ToolbarComponent={(props) => (
            <div>
              <CustomToolbar {...props} />
              <button
               
                onClick={() => console.log(true)}
              >
              </button>
            </div>
          )}
          PopperProps={{ sx: {

            "& .MuiPickersDay-root": {
              borderRadius:"4px",
              // background:"green",
              // color:"red",
              // "& .Mui-selected ": {
              //   backgroundColor: "green",

              // },
              "& .":{
                backgroundColor:"red",
                color:"pink"
              }
            }} }}
        renderInput={({
            inputRef,
            inputProps,
            InputProps,
          }) => (
            <div>
              <Box ref={inputRef}>
                {InputProps?.endAdornment}

              </Box>
             
            </div>
          )}
        />
        {/* </MuiThemeProvider> */}
      </Stack>
    </LocalizationProvider>
    </div>
  );
}
const CustomToolbar = function(props) {


  const { date, isLandscape, openView, setOpenView, title } = props;

  const handleChangeViewClick = (view) => (e) => {
    setOpenView(view);
  };

 

  return (
    <div
      

    >
      <button
        onClick={handleChangeViewClick('year')}
      >Hello</button>
      <button
        onClick={handleChangeViewClick('date')}
      
      >World</button>
    </div>
  );
};