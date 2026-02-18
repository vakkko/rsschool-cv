import type { SxProps, Theme } from "@mui/material";

export const companyAndDateStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media (max-width:600px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
};
