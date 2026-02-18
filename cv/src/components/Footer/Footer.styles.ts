import type { SxProps, Theme } from "@mui/material";

export const footerContentStyles: SxProps<Theme> = {
  width: "60%",
  m: "2rem 0",

  img: {
    maxWidth: "20rem",
  },

  "& > ul": {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
};

export const linkStyle: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
};

export const yearStyles: SxProps<Theme> = {
  fontSize: "1rem",
};
