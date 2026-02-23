import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Category from "./pages/Category"
import Search from "./pages/Search"
import SingleGif from "./pages/SingleGif"
import Favorites from "./pages/Favorites"
import AppLayout from "./layout/AppLayout"
import Home from "./pages/Home"
import GifProvider from "./context/Gif-Context"

function App() {

  const Router = createBrowserRouter([{
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:category',
        element: <Category />
      },
       {
        path: '/search/:query',
        element: <Search />
      },
        {
        path: '/:type/:slug',
        element: <SingleGif />
      },
        {
        path: '/favorites',
        element: <Favorites />
      }

    ]
  }])

  return (
    <GifProvider>
        <RouterProvider router={Router}  />
    </GifProvider>


    
  )
}

export default App
