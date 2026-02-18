import type { SxProps, Theme } from "@mui/material";
import { flexColumnCenter } from "../../styles/common";

export const headerStyles: SxProps<Theme> = {
  ...flexColumnCenter,
  gap: "1rem",
  mt: "4rem",
};

export const imgStyles: SxProps<Theme> = {
  width: "130px",
  borderRadius: "50%",
};

export const nameAndPositionStyles: SxProps<Theme> = {
  ...flexColumnCenter,
};

export const breakElement: SxProps<Theme> = {
  display: "none",
  "@media (max-width:520px)": {
    display: "block",
  },
};
