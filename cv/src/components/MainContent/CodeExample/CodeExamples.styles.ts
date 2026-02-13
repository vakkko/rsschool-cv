import type { SxProps, Theme } from "@mui/material";

export const codeContainer: SxProps<Theme> = {
  display: "flex",
  gap: "2rem",

  "@media (max-width:1316px)": {
    flexDirection: "column",
  },
};

export const solutionStyles: SxProps<Theme> = {
  width: "100%",
  height: "fit-content",
  p: 2,
  bgcolor: "#f0f0f0",
  borderRadius: 1,
  overflowX: "auto",
  code: {
    color: "#333",
  },
};
