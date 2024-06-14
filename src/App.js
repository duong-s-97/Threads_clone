import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import { privateRoutes, publicRoutes } from "./routes";
import "../src/components/GlobalStyles/font-awesome-6.4.2-pro-main/css/all.css";

function App() {
  const [type, setType] = useState("USER");

  // Xử lý check type
  const handleReturnRouter = () => {
    if (type === "USER") {
      return publicRoutes;
    }
    // return AdminRouter;
  };
  const handleReturnLayout = () => {
    if (type === "USER") {
      return DefaultLayout;
    }
    // return LayoutAdmin;
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          {handleReturnRouter().map((route, index) => {
            const Page = route.component;
            let Layout = handleReturnLayout();

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
