import { ReactElement } from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Theme } from "./Theme";

const AppTheme = ({
  children,
}: {
  children?: ReactElement | ReactElement[];
}) => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
