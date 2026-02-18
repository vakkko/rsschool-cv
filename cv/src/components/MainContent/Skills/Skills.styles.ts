import type { SxProps, Theme } from "@mui/material";

export const skillsContainer: SxProps<Theme> = {
  display: "grid",
  gridTemplateRows: "repeat(3, 1fr)",
  gridTemplateColumns: "repeat(2, 1fr)",
  rowGap: "1rem",

  "@media (max-width:718px)": {
    display: "flex",
    flexDirection: "column",
  },
};
