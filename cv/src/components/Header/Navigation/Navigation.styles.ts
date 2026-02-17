import type { SxProps, Theme } from "@mui/material";

export const navigaitonStyles: SxProps<Theme> = {
  "& > ul": {
    display: "flex",
    gap: "1rem",
  },
  a: {
    fontWeight: 500,
  },
};
