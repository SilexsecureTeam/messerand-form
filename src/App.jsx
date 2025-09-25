import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import Form from "./component/Form.jsx";
import Success from "./component/Success.jsx";
import ErrorBoundary from "./component/ErrorBoundary.jsx";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
