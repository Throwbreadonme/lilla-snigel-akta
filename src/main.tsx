import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter, createRootRoute, Outlet } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route as IndexRoute } from "./routes/index";
import { Route as LibraryRoute } from "./routes/library";
import { Route as TomtenRoute } from "./routes/library/tomten-och-skogen";
import "./styles.css";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  ),
});

const indexRoute = IndexRoute.update({ getParentRoute: () => rootRoute } as any);
const libraryRoute = LibraryRoute.update({ getParentRoute: () => rootRoute } as any);
const tomtenRoute = TomtenRoute.update({ getParentRoute: () => rootRoute } as any);

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
