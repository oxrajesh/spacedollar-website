import React, { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <Suspense fallback={null}>
      <Header />
      <HashRouter>
        <Switch>
          <Route exact strict path="/" component={Landing} />
        </Switch>
      </HashRouter>
      <Footer />
    </Suspense>
  );
}
