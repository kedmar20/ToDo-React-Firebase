import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import EditView from "./EditView/EditView";
import MainView from "./MainView/MainView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TasksProviders from "providers/TasksProviders";

function App() {
   return (
      <Router>
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainTemplate>
               <TasksProviders>
                  <Routes>
                     <Route path="edit-view" element={<EditView />}></Route>
                     <Route path="/" exact element={<MainView />}></Route>
                  </Routes>
               </TasksProviders>
            </MainTemplate>
         </ThemeProvider>
      </Router>
   );
}

export default App;
