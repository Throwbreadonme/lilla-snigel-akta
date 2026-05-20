/* eslint-disable */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as LibraryRouteImport } from './routes/library'
import { Route as LibraryTomtenOchSkogenRouteImport } from './routes/library/tomten-och-skogen'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

const LibraryRoute = LibraryRouteImport.update({
  id: '/library',
  path: '/library',
  getParentRoute: () => rootRouteImport,
} as any)

const LibraryTomtenOchSkogenRoute = LibraryTomtenOchSkogenRouteImport.update({
  id: '/library/tomten-och-skogen',
  path: '/library/tomten-och-skogen',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/library': typeof LibraryRoute
  '/library/tomten-och-skogen': typeof LibraryTomtenOchSkogenRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/library': typeof LibraryRoute
  '/library/tomten-och-skogen': typeof LibraryTomtenOchSkogenRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/library': typeof LibraryRoute
  '/library/tomten-och-skogen': typeof LibraryTomtenOchSkogenRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/library' | '/library/tomten-och-skogen'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/library' | '/library/tomten-och-skogen'
  id: '__root__' | '/' | '/library' | '/library/tomten-och-skogen'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LibraryRoute: typeof LibraryRoute
  LibraryTomtenOchSkogenRoute: typeof LibraryTomtenOchSkogenRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/library': {
      id: '/library'
      path: '/library'
      fullPath: '/library'
      preLoaderRoute: typeof LibraryRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/library/tomten-och-skogen': {
      id: '/library/tomten-och-skogen'
      path: '/library/tomten-och-skogen'
      fullPath: '/library/tomten-och-skogen'
      preLoaderRoute: typeof LibraryTomtenOchSkogenRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LibraryRoute: LibraryRoute,
  LibraryTomtenOchSkogenRoute: LibraryTomtenOchSkogenRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
