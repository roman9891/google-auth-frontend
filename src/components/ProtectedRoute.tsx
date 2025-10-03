// ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { type ReactNode } from 'react';
import { useAuth } from '../services/auth';

const noAuth = import.meta.env.VITE_NO_AUTH === 'true';

interface Props {
    children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
    const authContext = useAuth();
    const { getAuth } = authContext;
    const auth = getAuth();

    if (noAuth) {
        return <>{children}</>;
    }

    return auth ? children : <Navigate to="/login" replace />;
}
