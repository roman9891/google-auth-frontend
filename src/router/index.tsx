import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import ProtectedRoute from '../components/ProtectedRoute';
import { About } from '../pages/About';

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '*',
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
    },
]);
