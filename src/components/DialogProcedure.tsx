import { Box, Button, DialogContent } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useProcedure } from "../store";
import { Procedures } from "./Procedures";

export const DialogProcedure = ({ handleModal, isModalOpen }: any) => {
  const procedures = useProcedure((state) => state.procedure);

  const onAddNewPrecedure = useProcedure((state) => state.onAddNewPrecedure);

  return (
    <Dialog className="animate__animated animate__fadeIn"
      open={isModalOpen}
      onClose={handleModal}
      sx={{
        display: "flex",
        flexDirection: "column",
        m: "auto",
        maxWidth: "1024px",
      }}
      fullWidth={true}
      maxWidth={false}
    >
      <Button
        onClick={handleModal}
        variant="text"
        sx={{ color: "#000", alignSelf: "flex-end" }}
      >
        X
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <DialogTitle variant="h5" sx={{ fontWeight: "bold", color: "#1E2469" }}>
          Procedimientos{" "}
        </DialogTitle>
        <Button
          variant="text"
          sx={{ color: "#07B284", fontWeight: "400", display:"flex", gap:1 }}
          onClick={onAddNewPrecedure}
        >
          <img src="/plus-icon.svg" alt=""  /> {} Añadir procedimiento
        </Button>
      </Box>

      <DialogContent sx={{ justifyContent: "" }}>
        <Procedures procedures={procedures} />
      </DialogContent>
      
    </Dialog>
  );
};
