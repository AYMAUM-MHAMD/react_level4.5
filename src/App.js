import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Stack,
  Box,
  Divider,
} from "@mui/material";
import { useMemo, useState } from "react";
import getDesignTokens from "./styles/MyTheme";
import AppBarr from "./components/AppBar";
import MyLest from "./components/Mylest";
import Posts from "./components/Posts";
import RightBar from "./components/RightBar";
import AddPost from "./components/AddPost";

function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [showList, setshowList] = useState("none");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box className={theme.palette.mode}>
        <AppBarr {...{ showList, setshowList }} />

        <Stack
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ flexDirection: "row" }}
        >
          <MyLest {...{ theme, setmyMOde, showList, setshowList }} />

          <Posts />

          <RightBar theme={theme} />
        </Stack>

        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
