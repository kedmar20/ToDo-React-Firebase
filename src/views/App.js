import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";

function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <MainTemplate />
      </ThemeProvider>
   );
}

export default App;
