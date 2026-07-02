import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as LibraryRouteImport } from './routes/library'
import { Route as TomtenRouteImport } from './routes/library/tomten-och-skogen'
import { Route as MarinaRouteImport } from './routes/library/marina-i-simhallen'
import { Route as AboutRouteImport } from './routes/about'
import { Route as FAQRouteImport } from './routes/faq'

const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)
const LibraryRoute = LibraryRouteImport.update({ id: '/library', path: '/library', getParentRoute: () => rootRouteImport } as any)
const TomtenRoute = TomtenRouteImport.update({ id: '/library/tomten-och-skogen', path: '/library/tomten-och-skogen', getParentRoute: () => rootRouteImport } as any)
const MarinaRoute = MarinaRouteImport.update({ id: '/library/marina-i-simhallen', path: '/library/marina-i-simhallen', getParentRoute: () => rootRouteImport } as any)
const AboutRoute = AboutRouteImport.update({ id: '/about', path: '/about', getParentRoute: () => rootRouteImport } as any)
const FAQRoute = FAQRouteImport.update({ id: '/faq', path: '/faq', getParentRoute: () => rootRouteImport } as any)

const rootRouteChildren = { IndexRoute, LibraryRoute, TomtenRoute, MarinaRoute, AboutRoute, FAQRoute }

export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren)
