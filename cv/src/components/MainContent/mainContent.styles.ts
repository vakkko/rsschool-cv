import type { SxProps, Theme } from "@mui/material";
import { flexColumnCenter } from "../../styles/common";

export const mainContentStyles: SxProps<Theme> = {
  ...flexColumnCenter,
  width: "60%",
  mt: "2rem",
};
