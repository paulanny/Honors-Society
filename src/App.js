import "react-toastify/dist/ReactToastify.css";

import { Faqs, AboutUs, Home, Join, Programs } from "./pagesnew";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Loader } from "components";
import NotFound from "./pages/not-found";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { routes } from "./routes";

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.aboutus} element={<AboutUs />} />
            <Route path={routes.join} element={<Join />} />
            <Route path={routes.programs} element={<Programs />} />
            <Route path={routes.faqs} element={<Faqs />} />
            <Route path={routes.notFound} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>

      <ToastContainer />
    </div>
  );
}

export default App;
