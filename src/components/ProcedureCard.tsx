import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";

interface Iprocedures {
  description: string | number;
  code: string | number;
  reclaimed: number;
  variance: number;
  amountAuthorized: number;
}
export const ProcedureCard: FC<Iprocedures> = ({
  description,
  code,
  reclaimed,
  variance,
  amountAuthorized,
}) => {
  return (
    <Box className="animate__animated animate__fadeIn"
      sx={{
        bgcolor: "white",
        mt: 2,
        pl: 6,
        py: 2,
        maxWidth: "941px",
        borderRadius: "10px",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: "78px" }}
        columns={{ xs: 2, sm: 4, md:8,  lg: 12 }}
      >
        <Grid item xs={2} sm={2} md={2}>
          <Typography component="p">Procedimiento</Typography>
          <Typography component="p" sx={{ fontWeight: "bold" }}>
            {description}
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <Typography component="p">Codigo</Typography>
          <Typography component="p" sx={{ fontWeight: "bold" }}>
            {code}
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <Typography component="p">Reclamado</Typography>
          <Typography component="p" sx={{ fontWeight: "bold" }}>
            {reclaimed}
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <Typography component="p">Diferencia</Typography>
          <Typography component="p" sx={{ fontWeight: "bold" }}>
            {variance}
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <Typography component="p">Autorizado</Typography>
          <Typography component="p" sx={{ fontWeight: "bold" }}>
            {amountAuthorized}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
