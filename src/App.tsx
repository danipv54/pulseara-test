import { Home } from "./pages/home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main:"#3F48AD",
        dark:"#323a8a",
      },
      secondary:{
      
        main:"#D6D6EB",
        dark:"#D6D6EB",
       contrastText:"#000",
      },

    },
    components: {
      MuiButton: {
        defaultProps:{
           disableRipple:true,
           disableFocusRipple:true,
            disableElevation:true
        },
        styleOverrides:{
          root:{
            color:"white",
            borderRadius:"5px",
          }
        }
      },
    },
    typography: {
      fontFamily: "Raleway",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
