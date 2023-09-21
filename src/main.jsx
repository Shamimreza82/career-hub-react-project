import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Errorpage from './components/ErrorPage/Errorpage';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import JobDetails from './components/JobDetails/JobDetails';
import JobsAll from './components/JobsAll/JobsAll';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/', 
        element: <Home></Home>
      }, 
      {
        path: '/applied', 
        element: <AppliedJobs></AppliedJobs>
      }, 

      {
        path: '/jobs', 
        element: <JobsAll></JobsAll>
      },
      {
        path: '/job/:id', 
        loader: () => fetch ('jobs.json'),
        element: <JobDetails></JobDetails>
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}></RouterProvider>
  </React.StrictMode>,
)
