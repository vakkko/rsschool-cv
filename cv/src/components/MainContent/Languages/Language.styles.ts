import type { SxProps, Theme } from "@mui/material";

export const languageStyles: SxProps<Theme> = {
  mr: "25rem",

  "@media (max-width:1010px)": {
    mr: 0,
  },
};

export const languageContainer: SxProps<Theme> = {
  "@media (max-width:1010px)": {
    display: "flex",
    justifyContent: "space-between",
  },
};
