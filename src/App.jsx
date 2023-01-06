import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#09031c";
      // document.body.style.backgroundColor = "black";
      // document.body.style.backgroundColor = 'blue';

      document.title = "TextUtils - dark mode";

      showAlert("Dark mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";

      showAlert("Light  mode has been enable", "success");

      document.title = "TextUtils - light mode";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/about" element={<About />}></Route>

          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze below"
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
