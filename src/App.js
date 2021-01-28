import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/common/navbar";
import CustomSpinner from "./components/common/CustomSpinner";
import { DataContextProvider } from "./Context/DataContext";

const Home = lazy(() => import("./components/Pages/home"));
const Bookmarks = lazy(() => import("./components/Pages/bookmarks"));
const Recipes = lazy(() => import("./components/Pages/Recipes"));

const App = () => {
  return (
    <>
      <DataContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Suspense fallback={<CustomSpinner />}>
              <Route exact path="/" component={Home} />
              <Route exact path="/bookmarks" component={Bookmarks} />
              <Route exact path="/recipes" component={Recipes} />
            </Suspense>
          </Switch>
        </Router>
      </DataContextProvider>
    </>
  );
};

export default App;
