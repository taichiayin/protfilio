import {
  createBrowserRouter,
} from "react-router-dom";
import App from '@/App'
import Home from '@/pages/Home'
import Experience from '@/pages/Experience'
import Skill from '@/pages/Skill'
import Protfolio from '@/pages/Protfolio'
import Contact from '@/pages/Contact'
import NotFoundPage from '@/pages/NotFoundPage'

const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/experience",
          element: <Experience />
        },
        {
          path: "/skill",
          element: <Skill />
        },
        {
          path: "/protfolio",
          element: <Protfolio />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    },
    {
      path: "*",
      element: <NotFoundPage />
    }
  ]
)

export default router