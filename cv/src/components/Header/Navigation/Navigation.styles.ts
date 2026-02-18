import type { SxProps, Theme } from "@mui/material";

export const navigaitonStyles: SxProps<Theme> = {
  "& > ul": {
    display: "flex",
    gap: "1rem",
  },
  a: {
    fontWeight: 500,
  },
  li: {
    position: "relative",

    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      height: "2px",
      width: "100%",
      backgroundColor: "black",
      transform: "scaleX(0)",
      transformOrigin: "left",
      transition: "transform 0.3s ease",
    },

    "&:hover::after": {
      transform: "scaleX(1)",
    },
  },
};
