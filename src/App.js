import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Orders from "./components/Orders/Orders";



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: () => fetch('tShirt.json'),
          element: <Home />
        } ,
        {
          path: '/orders',
          element: <Orders />
        },
        {
          path: '/about',
          element: <About />
        }


      ]
    },
    {
      path: '*',
      element: <div>404! Error Mahathir</div>
    }
  ])
  return(
    <RouterProvider router={router} />
  )
}

export default App;
