import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as LibraryRouteImport } from './routes/library'
import { Route as TomtenRouteImport } from './routes/library/tomten-och-skogen'

const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)
const LibraryRoute = LibraryRouteImport.update({ id: '/library', path: '/library', getParentRoute: () => rootRouteImport } as any)
const TomtenRoute = TomtenRouteImport.update({ id: '/library/tomten-och-skogen', path: '/library/tomten-och-skogen', getParentRoute: () => rootRouteImport } as any)

const rootRouteChildren = { IndexRoute, LibraryRoute, TomtenRoute }

export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren)
