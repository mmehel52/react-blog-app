import AppRouter from "./app-router/AppRouter";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "styled-components";
import AuthContextProvider from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import BlogContextProvider from "./contexts/BlogContext";
const style = {
  colors: {
    header: "#747A8C",
    body: "#0C1940",
    text: "#00010D",
  },
  margins: {},
  responsive: "724px",
};

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BlogContextProvider>
          <ThemeProvider theme={style}>
            <Navbar />
            <AppRouter />
            <ToastContainer />
          </ThemeProvider>
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
