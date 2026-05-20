import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Index } from "./routes/index";
import { Library } from "./routes/library";
import { TomtenOchSkogen } from "./routes/library/tomten-och-skogen";
import "./styles.css";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const libraryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/library",
  component: Library,
});

const tomtenRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/library/tomten-och-skogen",
  component: TomtenOchSkogen,
});

const routeTree = rootRoute.addChildren([indexRoute, libraryRoute, tomtenRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
