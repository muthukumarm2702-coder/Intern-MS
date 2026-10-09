import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import {Login} from './Components/Login/Login.jsx';
import {ForgetPassword} from './Components/Login/ForgetPassword.jsx';
import {OtpForgetPassword} from './Components/Login/OtpForgetPassword.jsx';
import {ResetPassword} from './Components/Login/ResetPassword.jsx';
import {PasswordResetSuccess} from './Components/Login/PasswordResetSuccess.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/forgot-password',
    element: <ForgetPassword />,
  },
  {
    path: '/otp',
    element: <OtpForgetPassword />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/reset-success',
    element: <PasswordResetSuccess />,
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
