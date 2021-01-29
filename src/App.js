import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import Navbar from "./components/common/navbar";
import CustomSpinner from "./components/common/CustomSpinner";
import { DataContextProvider } from "./Context/DataContext";

const Home = lazy(() => import("./components/Pages/home"));
const Bookmarks = lazy(() => import("./components/Pages/bookmarks"));
const Recipes = lazy(() => import("./components/Pages/Recipes"));
const SpecificRecipe = lazy(() => import("./components/Pages/SpecificItem"));

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DataContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Suspense fallback={<CustomSpinner />}>
              <Route exact path="/" component={Home} />
              <Route exact path="/bookmarks" component={Bookmarks} />
              <Route exact path="/recipes" component={Recipes} />
              <Route
                exact
                path="/specificRecipe/:id"
                component={SpecificRecipe}
              />
            </Suspense>
          </Switch>
        </Router>
      </DataContextProvider>
    </ThemeProvider>
  );
};

export default App;
