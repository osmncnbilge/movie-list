import { Grid } from "@mui/material";
import React from "react";

type Props = {
  minHeight?: string;
  children: React.ReactNode;
};

const Info = ({ children, minHeight }: Props) => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: minHeight ? minHeight : "85vh" }}
      >
        <Grid item xs={3}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Info;
