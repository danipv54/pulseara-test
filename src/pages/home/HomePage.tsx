import { Box, Button, Typography } from "@mui/material";
import { ProcedureCard, DialogProcedure, EmptyProcedure } from "../../components";
import { useProcedure } from "../../store";
import 'animate.css';
export const Home = () => {
  const procedures = useProcedure((state) => state.procedure);
  const isModalOpen = useProcedure((state) => state.isModalOpen);
  const handleModal = useProcedure((state) => state.handleModal);

  return (
    <Box sx={{ ml: 10, mt: 10 }} className="animate__animated animate__fadeIn" >
      <Typography variant="h6" component="h1">
        Procedimientos 
      </Typography>

      <DialogProcedure
        isModalOpen={isModalOpen}
        handleModal={handleModal}
      ></DialogProcedure>

      {
        !Boolean(procedures.length) &&
        <EmptyProcedure/>
      }
      {procedures.map(
        ({

          description,
          code,
          reclaimed,
          variance,
          amountAuthorized,
        }) => (
          <ProcedureCard
            key={description}
            description={description}
            code={code}
            reclaimed={reclaimed}
            variance={variance}
            amountAuthorized={amountAuthorized}
          />
        )
      )}

      {
      Boolean(procedures.length) && 
       
        <Button 
        variant="contained"
        onClick={handleModal}
        size="large"
        sx={{ mt: "35px",display: "flex", gap: 1  }}
      >
         <img src="pen.svg" alt="" width={"13px"} height={"14px"} />
        Editar procedimiento
      </Button>
       
      }
      
    </Box>
  );
};





