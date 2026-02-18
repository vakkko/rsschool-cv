import type { SxProps, Theme } from "@mui/material";

export const detailsContainerStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  li: {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
  },
  a: {
    color: "inherit",
  },

  "@media (max-width:890px)": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },

  "@media (max-width:718px)": {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr 1fr 1fr",
    alignSelf: "center",
  },
};
