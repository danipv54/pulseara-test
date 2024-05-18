import {
  Box,
  Button,
  DialogActions,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useProcedure } from "../store";
import { useForm } from "react-hook-form";
import { formFieldsHelper, matchDescriptionHelper } from "../helper";
import { useNewProcedure } from "../hooks";

export const Procedures = ({ procedures }: any) => {
  const { onInputChange, formState } = useNewProcedure();
  const isAddNewOpen = useProcedure((state) => state.isAddNewOpen);
  const handleModalPrecedure = useProcedure(
    (state) => state.handleModalPrecedure
  );
  const handleModal = useProcedure((state) => state.handleModal);
  const onDeleteProcedure = useProcedure((state) => state.onDeleteProcedure);
  const onCreateNewProcedure = useProcedure(
    (state) => state.onCreateNewProcedure
  );
  const onEditProcedure = useProcedure((state) => state.onEditProcedure);

  const {
    register,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<any>();

  const submit = (e: any) => {

       
    if (!Object.keys(dirtyFields).length  ) {
      onCreateNewProcedure(formState as any);
      handleModalPrecedure();
      handleModal();
      return;
    }

    const resting = formFieldsHelper(Object.keys(dirtyFields), e) as [];
    let id;
    resting.map((item: any, index) => {
      if (procedures[index][`${matchDescriptionHelper(Object.keys(item))}`]) {
        id = procedures[index].id!;

        onEditProcedure(
          matchDescriptionHelper(Object.keys(item))!,
          `${Object.values(item)}`,
          index,
          id
        );
      }
      return {
        [`${Object.keys(item)}`]: [Object.values(item)],
      };
    });
    handleModalPrecedure();
  };

  return (
    <form  className="animate__animated animate__fadeIn" onSubmit={handleSubmit(submit)}>
      {procedures.map(
        ({
          description,
          code,
          reclaimed,
          variance,
          amountAuthorized,
          id,
        }: any) => (
          <Box key={`description-${id}`}>
            <Grid
              container
              sx={{ mb: "32px" }}
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, sm: 4, md: 8, lg: 12 }}
            >
              <Grid
                item
                xs={3}
                sm={2}
                md={2}
                sx={{ marginRight: "48px", display: "flex", flexDirection:{
                  sm:"row-reverse",
                  lg:"row"
                }, alignItems:"center" }}
              >
                <Button
                  color="primary"
                  sx={{  width:"10px", marginTop:3 }}
                  variant="text"
                  size="small"
                  onClick={()=>onDeleteProcedure(id)}
                >
                  <img src="/bin.svg" alt="" />
                </Button>
                <Box>
                  <Typography component="p">Procedimiento</Typography>

                  <TextField
                  required
                    id="outlined-basic"
                    defaultValue={description}
                    variant="outlined"
                    size="small"
                    sx={{ maxWidth: "181px" }}
                    {...register(`description-${id}`)}
                  />
                </Box>
              </Grid>
              <Grid item xs={3} sm={2} md={2} sx={{ marginRight: "24px" }}>
                <Typography component="p">Codigo</Typography>

                <TextField
                  id="outlined-basic"
                  defaultValue={code}
                  variant="outlined"
                  size="small"
                  sx={{ maxWidth: "181px" }}
                  {...register(`code-${id}`)}
                />
              </Grid>
              <Grid item xs={3} sm={2} md={2} sx={{ marginRight: "24px" }}>
                <Typography component="p">Reclamado RD$</Typography>

                <TextField
                required
                  id="outlined-basic"
                  defaultValue={reclaimed ? `RD$ ${reclaimed}` : "Ej: 4563523"}
                  variant="outlined"
                  size="small"
                  sx={{ maxWidth: "181px" }}
                  {...register(`reclaimed-${id}`)}
                />
              </Grid>
              <Grid item xs={3} sm={2} md={2} sx={{ marginRight: "24px" }}>
                <Typography component="p">Diferencia RD$</Typography>

                <TextField
                required
                  id="outlined-basic"
                  defaultValue={variance ? `RD$ ${variance}` : "Ej: 4563523"}
                  variant="outlined"
                  size="small"
                  sx={{ maxWidth: "181px" }}
                  {...register(`variance-${id}`)}
                />
              </Grid>
              <Grid
                item
                xs={3}
                sm={2}
                md={2}
                sx={{
                  marginLeft: {
                    md: "24px",
                  },
                }}
              >
                <Typography component="p">Autorizado RD$</Typography>

                <TextField
                required
                  id="outlined-basic"
                  defaultValue={
                    amountAuthorized ? `RD$ ${amountAuthorized}` : "Ej: 4563523"
                  }
                  variant="outlined"
                  size="small"
                  sx={{ maxWidth: "181px" }}
                  {...register(`amountAuthorized-${id}`)}
                />
              </Grid>
            </Grid>
          </Box>
        )
      )}

      {isAddNewOpen && (
        <Grid className="animate__animated animate__fadeIn"
          container
          sx={{ mb: "32px" }}
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 4, md: 8, lg: 12 }}
        >
          <Grid item xs={3} sm={2} md={2} sx={{ marginRight: "48px" }}>
            <Typography component="p">Procedimiento</Typography>

            <TextField
              id="outlined-basic"
              defaultValue={""}
              variant="outlined"
              size="small"
              sx={{ maxWidth: "181px" }}
              name="description"
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={3} sm={2} md={2} sx={{ marginRight: "24px" }}>
            <Typography component="p">Codigo</Typography>

            <TextField
              id="outlined-basic"
              defaultValue={""}
              variant="outlined"
              size="small"
              sx={{ maxWidth: "181px" }}
              name="code"
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={3} sm={2} md={2} sx={{ marginRight: "24px" }}>
            <Typography component="p">Reclamado RD$</Typography>

            <TextField
              id="outlined-basic"
              defaultValue={""}
              variant="outlined"
              size="small"
              sx={{ maxWidth: "181px" }}
              name="reclaimed"
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={3} sm={2} md={2} sx={{ marginRight: "24px" }}>
            <Typography component="p">Diferencia RD$</Typography>

            <TextField
              id="outlined-basic"
              defaultValue={""}
              variant="outlined"
              size="small"
              sx={{ maxWidth: "181px" }}
              name="variance"
              onChange={onInputChange}
            />
          </Grid>
          <Grid
            item
            xs={3}
            sm={2}
            md={2}
            sx={{
              marginLeft: {
                md: "24px",
              },
            }}
          >
            <Typography component="p">Autorizado RD$</Typography>

            <TextField
              id="outlined-basic"
              defaultValue={""}
              variant="outlined"
              size="small"
              sx={{ maxWidth: "181px" }}
              name="amountAuthorized"
              onChange={onInputChange}
            />
          </Grid>
        </Grid>
      )}
      <DialogActions sx={{ alignSelf: "flex-end" }}>
        <Button
          variant="outlined"
          sx={{ borderWidth: "2px", color: "#000" }}
          color="secondary"
          onClick={handleModal}
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          color="primary"
          sx={{ display: "flex", gap: 1 }}
          variant="contained"
          size="large"
          onClick={handleModal}
        >
          <img src="/check.svg" alt="" width={"13px"} height={"14px"} />
          Guardar cambios
        </Button>
      </DialogActions>
    </form>
  );
};
