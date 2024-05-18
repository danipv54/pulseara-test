import { Box, Button, Typography } from "@mui/material";
import { useProcedure } from "../store";

export const EmptyProcedure = () => {
  const handleModal = useProcedure((state) => state.handleModal);
  return (
    <Box
      sx={{
        display: "grid",
        justifyItems: "center",
        alignItems:"center",
        m:"auto",
        marginTop:"150px",
        gap: 2,
      }}
    >
      <img src="no-procedure-icon.svg" alt="" />
      <Typography>No hay datos que mostrar</Typography>
      <Button
        color="primary"
        sx={{ display: "flex", gap: 1, }}
        variant="contained"
        size="large"
        onClick={handleModal}
      >
        <img src="/pen.svg" alt="" width={"13px"} height={"14px"} />
        Crea un procedimientos
      </Button>
    </Box>
  );
};
