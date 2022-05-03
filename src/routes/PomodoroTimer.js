import { useState, useEffect } from "react";
import { useCountdownTimer } from "use-countdown-timer";
import prettyMilliseconds from "pretty-ms";
import DateNow from "../components/DateNow";
import Header from "../components/Header";
import Title from "../components/Title";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";
import notifySoundMp3 from "../assets/sounds/notification.mp3";
import { Container, Typography, Box, LinearProgress, Card, Button, CardActions, Stack } from "@mui/material";
import { HeadphonesRounded } from "@mui/icons-material";

function PomodoroTimer({ type, time }) {
  const focusUrl = "https://eungangku.github.io/EGKTools/#/pomodoro-timer";
  const restUrl = "https://eungangku.github.io/EGKTools/#/pomodoro-timer/rest";
  const [primaryColor, setPrimaryColor] = useState("#2196f3");

  useEffect(() => {
    if (type === "rest") {
      setPrimaryColor("#4caf50");
    }
  }, []);

  function playNotifySound() {
    const audioElement = new Audio(notifySoundMp3);
    audioElement.play();
  }

  const { countdown, start, reset, pause, isRunning } = useCountdownTimer({
    timer: 1000 * time,
    autostart: true,
    onExpire: () => {
      setInterval(() => {
        playNotifySound();
      }, 2000);

      setTimeout(() => {
        if (type === "focus") {
          window.location.href = restUrl;
        } else {
          window.location.href = focusUrl;
        }
        window.location.reload();
      }, 7000);
    },
  });

  useEffect(() => {
    document.title = `${prettyMilliseconds(countdown, { colonNotation: true })} - ${type}`;
  }, [countdown]);

  function switchToFocus() {
    if (type === "focus") {
      return;
    } else {
      window.location.href = focusUrl;
    }
    window.location.reload();
  }
  function switchToRest() {
    if (type === "rest") {
      return;
    } else {
      window.location.href = restUrl;
    }
    window.location.reload();
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ padding: "20px 0" }}>
        <Header type={"fill"}>
          <Title>뽀모도로 타이머</Title>
          <HeaderBreadcrumb>
            <DateNow format="hh:mm A" />
          </HeaderBreadcrumb>
        </Header>
      </Box>
      <Box sx={{}}>
        <Box sx={{}}>
          <Card variant="outlined" sx={{ maxWidth: "auto", margin: "auto", padding: "0" }}>
            <Box sx={{ padding: "60px 0", background: primaryColor, color: "white" }}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                {prettyMilliseconds(countdown, { colonNotation: true })}
              </Typography>
            </Box>
            <LinearProgress color={type === "rest" ? "success" : "primary"} variant="determinate" value={Math.round((countdown / (1000 * time)) * 100)} />
            <CardActions>
              <Button variant={type === "focus" ? "contained" : "text"} color="primary" onClick={switchToFocus}>
                Focus
              </Button>
              <Button variant={type === "focus" ? "text" : "contained"} color="success" onClick={switchToRest}>
                Rest
              </Button>
            </CardActions>
          </Card>
          <Card variant="outlined" sx={{ margin: "15px 0" }}>
            <CardActions>
              <Button onClick={start}>Start</Button>
              <Button color="error" onClick={pause}>
                Stop
              </Button>
              <Button color="warning" onClick={reset}>
                Reset
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

export default PomodoroTimer;
