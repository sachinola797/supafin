/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect, useMemo } from "react";

// react-router components
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

// jss components
import { create } from "jss";

// jss-rtl components
import rtl from "jss-rtl";

// @mui style components
import { StylesProvider, jssPreset } from "@mui/styles";

// @mui material components
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Soft UI Dashboard PRO React example components
import Sidenav from "examples/Sidenav";

// Soft UI Dashboard PRO React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// Soft UI Dashboard PRO React routes
import routes from "routes";

// Soft UI Dashboard PRO React contexts
import { useSoftUIController } from "context";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { ProtectedRoute } from "./ProtectedRoute";

export default function App() {
  const [controller] = useSoftUIController();
  const { direction, layout } = controller;
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // JSS presets for the rtl
  const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
  });

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      prepend: true,
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        if (route.protected) {
          return <ProtectedRoute path={route.route} component={route.component} key={route.key} />;
        }
        return <Route exact path={route.route} component={route.component} key={route.key} />;
      }

      return null;
    });

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={themeRTL}>
          <CssBaseline />
          {layout === "dashboard" && <Sidenav routes={routes} />}
          <Switch>
            {getRoutes(routes)}
            <Redirect from="*" to="/authentication/sign-in" />
          </Switch>
        </ThemeProvider>
      </StylesProvider>
    </CacheProvider>
  ) : (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {layout === "dashboard" && <Sidenav routes={routes} />}
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/dashboard" />
        </Switch>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
