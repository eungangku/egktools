import { Box, Button, Checkbox, Container, FormControlLabel, TextField, InputAdornment, Stack, ButtonGroup } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useState } from "react";
import Header from "../components/Header";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";
import Title from "../components/Title";

function Isbn() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [outputCount, setOutputCount] = useState("0");

  const cutAfterBlank = (str) => {
    const idx = str.indexOf(" ", 6);
    if (idx < 0) {
      return str;
    }
    return str.slice(0, idx);
  };
  const onInputChange = (e) => {
    setInput(e.target.value);
    const isbnInput = e.target.value;
    const dashRemoved = isbnInput.replaceAll("-", "");
    const isbnRemoved = dashRemoved.replaceAll("ISBN", "");
    const cutBlank = cutAfterBlank(isbnRemoved.trim());
    const formattedString = cutBlank.slice(0, 13);
    setOutput(formattedString);
    navigator.clipboard.writeText(formattedString);
    setOutputCount(formattedString.length);
  };

  const onInputFocus = () => {
    setInput("");
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div>
      <Header>
        <Title>ISBN Tools</Title>
        <HeaderBreadcrumb>EGK Tools</HeaderBreadcrumb>
      </Header>

      <Container>
        <Box
          sx={{
            backgroundColor: blue[100],
            borderRadius: "4px",
            marginBottom: 2,
            paddingX: 1,
          }}
        >
          <FormControlLabel control={<Checkbox defaultChecked />} label="공백 뒤 자르기" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="자동 복사" />
        </Box>
      </Container>

      <Container>
        <Box component="form">
          <TextField id="outlined-basic" label="ISBN Input" variant="outlined" fullWidth margin="dense" onChange={onInputChange} onFocus={onInputFocus} InputLabelProps={{ shrink: true }} value={input} />
          <TextField
            id="outlined-basic"
            label="Output"
            variant="outlined"
            fullWidth
            margin="dense"
            color="success"
            value={output}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: <InputAdornment position="end">{outputCount}</InputAdornment>,
            }}
            inputProps={{
              maxLength: 13,
            }}
          />
          <Box>
            <Button
              variant="text"
              color="success"
              sx={{
                fontWeight: "bold",
                float: "right",
              }}
              onClick={copyOutput}
            >
              복사
            </Button>
          </Box>
        </Box>
      </Container>

      <Container
        sx={{
          display: "inline-block",
        }}
      >
        <Box>
          <Stack direction={"row"} spacing={2} justifyContent="center">
            <ButtonGroup variant="outlined" area-label="outlined button group">
              <Button href="#" target="_blank">
                Tulip
              </Button>
              <Button href="https://dict.naver.com/" target="_blank">
                Dict
              </Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined" area-label="outlined button group">
              <Button onClick={() => navigator.clipboard.writeText("ㆍ")}>ㆍ</Button>
              <Button onClick={() => navigator.clipboard.writeText("外")}>外</Button>
              <Button onClick={() => navigator.clipboard.writeText("『』")}>『』</Button>
              <Button onClick={() => navigator.clipboard.writeText("①")}>①</Button>
              <Button onClick={() => navigator.clipboard.writeText("②")}>②</Button>
              <Button onClick={() => navigator.clipboard.writeText("③")}>③</Button>
            </ButtonGroup>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}

export default Isbn;
