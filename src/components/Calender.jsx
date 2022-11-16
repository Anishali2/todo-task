import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Box, TextField } from '@mui/material';
import { createTheme, } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
export default function Calender() {
  const [value, setValue] = React.useState(
    dayjs('2014-08-18T21:11:54'),
  );
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const materialTheme = createTheme({
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: "black",
        },
      },
      MuiPickersCalendarHeader: {
        switchHeader: {
          // backgroundColor: lightBlue.A200,
          // color: "white",
        },
      },
      MuiPickersDay: {
        day: {
          color: "blue",
        },
        daySelected: {
          backgroundColor: "pink",
        },
        dayDisabled: {
          color: "brown",
        },
        current: {
          color: "red",
        },
      },
      MuiPickersModal: {
        dialogAction: {
          color: "gray",
        },
      },
    },
  })
  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
      <MuiThemeProvider theme={materialTheme}>

        <DateTimePicker
          label="Date&Time picker"
          open={true}
          value={value}
          onChange={handleChange}
          disableOpenPicker
          className='mt-4'
          
        //   renderInput={(params) => <TextField {...params} />}
        renderInput={({
            inputRef,
            inputProps,
            InputProps,
          }) => (
            <div>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  '& button': {
                    color: '#000',
                  },
                }}
                ref={inputRef}
              >
                {/* <TextField
                  {...inputProps}
                  name={`vestings.time`}
                  className="text-black block mt-1 w-full focus:border-blue-500 border-gray-300 rounded-md shadow-sm uppercase focus:ring-blue-500 sm:text-sm"
                /> */}
                {InputProps?.endAdornment}
                
               
              </Box>
             
            </div>
          )}
        />
        </MuiThemeProvider>
      </Stack>
    </LocalizationProvider>
  );
}