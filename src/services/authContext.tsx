// AuthContext.tsx
import { useState, useEffect } from 'react';
import { jwtDecode, type JwtPayload } from 'jwt-decode';
import { AuthContext } from './auth';
import type { jwtData, User } from './types';

const API_URL = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:3000';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('auth');
        if (saved) {
            const parsed = JSON.parse(saved);
            setToken(parsed.token);
            setUser(parsed.user);
        }
    }, []);

    const login = async (username: string, password: string) => {
        const res = await fetch(API_URL + '/auth/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (!res.ok) {
            throw new Error('Login failed');
        }

        const data = (await res.json()) as jwtData;

        createSession(data.access_token);
        setToken(data.access_token);

        const decoded = jwtDecode<JwtPayload & { sub: string; username: string }>(
            data.access_token,
        );
        setUser({ id: decoded.sub, username: decoded.username });

        return data;
    };

    const register = async (username: string, password: string) => {
        const res = await fetch(API_URL + '/auth/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (!res.ok) {
            throw new Error('Registration failed');
        }

        const data = (await res.json()) as jwtData;

        createSession(data.access_token);
        setToken(data.access_token);

        const decoded = jwtDecode<JwtPayload & { sub: string; username: string }>(
            data.access_token,
        );
        setUser({ id: decoded.sub, username: decoded.username });

        return data;
    };

    const getAuth = () => {
        const auth = JSON.parse(localStorage.getItem('auth') || 'null');
        if (!auth) return null;
        if (Date.now() > auth.expiresAt) {
            localStorage.removeItem('auth');
            return null;
        }
        return auth;
    };

    const logout = () => {
        localStorage.removeItem('auth');
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout, getAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

const createSession = (token: string) => {
    const decoded = jwtDecode<JwtPayload>(token);
    const expiresAt = decoded.exp ? decoded.exp * 1000 : 0; // exp is in seconds, convert to ms
    localStorage.setItem('auth', JSON.stringify({ access_token: token, expiresAt }));
};
