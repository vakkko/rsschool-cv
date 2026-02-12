import type { SxProps, Theme } from "@mui/material";

const flexColumnCenter = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

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
