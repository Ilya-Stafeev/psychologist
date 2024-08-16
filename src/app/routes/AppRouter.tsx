import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from '../layout';
import { Media } from '../../pages/media/ui/Media';
import { Podcasts } from '../../pages/podcasts/ui/Podcasts';
import { About } from '../../pages/about';
import { Consultations } from '../../pages/consultations';
import { Home } from '../../pages/home';


export const AppRouter: FC = () => {

    const router = createBrowserRouter([
        {
          path: '/',
          element: (
            <>          
                <Layout />
            </>           
          ),
          children: [
            {
              path: '',
              element: <Home />,
            },
            {
              path: 'consultations',
              element: (                
                <Consultations />
              ),
            },
            {
              path: 'about',
              element: (        
                <About />             
              ),
            },
            {
              path: 'podcasts',
              element: (              
                <Podcasts />               
              ),
            },
            {
              path: 'media',
              element: (             
                <Media />               
              ),
            },
          ],
        },
      ]);

  return (    
    <RouterProvider router={router} />     
  )
}
