// ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { getAuth } from '../services/auth';
import type { ReactNode } from 'react';

const noAuth = import.meta.env.VITE_NO_AUTH === 'true';

interface Props {
    children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
    const auth = getAuth();

    if (noAuth) {
        return <>{children}</>;
    }

    return auth ? children : <Navigate to="/login" replace />;
}
