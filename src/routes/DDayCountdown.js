// @mui/x-date-pickers, moment
import { useState, useEffect } from "react";
import moment from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Header from "../components/Header";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";
import Title from "../components/Title";
import AlertBox from "../components/AlertBox";
import { FaInfoCircle } from "react-icons/fa";
import { Button, Container, Stack, TextField } from "@mui/material";

function DDayCountdown() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState();
  const [now, setNow] = useState();
  useEffect(() => {
    setNow(moment().utc().add(9, "hours"));
    setValue(moment().utc().add(9, "hours").set({ hour: 0, minute: 0, second: 0 }));
  }, []);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  const onAddButtonClicked = () => {
    console.log(value);
    console.log(title);
  };

  return (
    <div>
      <Container>
        <Header styles={{ margin: "15px 0 15px 0" }}>
          <Title primaryColor="#a5d6a7" textFillColor="">
            D-Day Countdown
          </Title>
          <HeaderBreadcrumb>EGK Tools</HeaderBreadcrumb>
        </Header>
        <AlertBox type={"icon"} styles={{ margin: "0" }}>
          <h3>
            <FaInfoCircle />
          </h3>
          <p>나만의 디데이 타이머</p>
        </AlertBox>
      </Container>

      <Container>
        <h2>디데이 추가</h2>
        <Stack direction={"row"} spacing={2}>
          <TextField id="outlined-basic" label="제목" variant="outlined" InputLabelProps={{ shrink: true }} value={title} onChange={onTitleChange} />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <MobileDatePicker label="날짜" inputFormat="YYYY/M/DD" value={value} onChange={handleDateChange} renderInput={(params) => <TextField {...params} />} />
          </LocalizationProvider>
          <Button variant="text" onClick={onAddButtonClicked}>
            추가
          </Button>
        </Stack>
      </Container>
    </div>
  );
}

export default DDayCountdown;
