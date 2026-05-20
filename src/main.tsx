import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter, createRoute, createRootRoute } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles.css";

const queryClient = new QueryClient();

// Import route components
import { Index } from "./routes/index";
import { Library } from "./routes/library";
import { TomtenOchSkogen } from "./routes/library/tomten-och-skogen";

const rootRoute = createRootRoute({
  component: () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    );
  },
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
