import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layouts/MainLayOut';
import Home from '../pages/home/Home';
import Contact from '../pages/Contact/Contact';
import AllProjects from '../pages/projects/AllProjects';
import MySkills from '../pages/my-skills/MySkills';
import AboutMe from '../pages/about-me/AboutMe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/projects',
        element: <AllProjects />,
      },
      {
        path: '/my-skills',
        element: <MySkills />,
      },
      {
        path: '/about-me',
        element: <AboutMe />,
      },
    ],
  },
]);

export default router;
