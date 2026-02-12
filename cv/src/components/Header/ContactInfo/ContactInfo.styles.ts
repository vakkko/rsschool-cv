import type { SxProps, Theme } from "@mui/material";

export const detailsContainerStyles: SxProps<Theme> = {
  display: "flex",
  gap: "1rem",
  li: {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
  },
  a: {
    color: "inherit",
  },
};
