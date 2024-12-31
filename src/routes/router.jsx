import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layouts/MainLayOut';
import Home from '../pages/home/Home';
import Contact from '../pages/home/Contact';
import AllProjects from '../pages/projects/AllProjects';
import MySkills from '../pages/my-skills/MySkills';
import AboutMe from '../pages/about-me/AboutMe';
import AllBlogs from '../pages/blogs/AllBlogs';

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
        path: '/blogs',
        element: <AllBlogs />,
      },
      {
        path: '/about-me',
        element: <AboutMe />,
      },
    ],
  },
]);

export default router;
