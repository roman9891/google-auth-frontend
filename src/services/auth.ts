import { jwtDecode, type JwtPayload } from 'jwt-decode';

const API_URL = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:3000';

interface jwtData {
    status: number;
    access_token: string;
}

export const login = async (username: string, password: string) => {
    const res = await fetch(API_URL + '/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email: username, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
        throw new Error('Login failed');
    }

    const data = (await res.json()) as jwtData;

    createSession(data.access_token);

    return data;
};

export const register = async (username: string, password: string) => {
    const res = await fetch(API_URL + '/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email: username, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
        throw new Error('Registration failed');
    }

    const data = (await res.json()) as jwtData;

    createSession(data.access_token);

    return data;
};

export function getAuth() {
    const auth = JSON.parse(localStorage.getItem('auth') || 'null');
    if (!auth) return null;
    if (Date.now() > auth.expiresAt) {
        localStorage.removeItem('auth');
        return null;
    }
    return auth;
}

export function logout() {
    localStorage.removeItem('auth');
}

const createSession = (token: string) => {
    const decoded = jwtDecode<JwtPayload>(token);
    const expiresAt = decoded.exp ? decoded.exp * 1000 : 0; // exp is in seconds, convert to ms
    localStorage.setItem('auth', JSON.stringify({ access_token: token, expiresAt }));
};
