import type { SxProps, Theme } from "@mui/material";

export const skillsContainer: SxProps<Theme> = {
  display: "grid",
  gridTemplateRows: "repeat(3, 1fr)",
  gridTemplateColumns: "repeat(2, 1fr)",
};
