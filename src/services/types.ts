export interface jwtData {
    status: number;
    access_token: string;
}

export type User = {
    id: string;
    username: string;
};

export type AuthContextType = {
    user: User | null;
    token: string | null;
    login: (username: string, password: string) => Promise<jwtData>;
    logout: () => void;
    register: (username: string, password: string) => Promise<jwtData>;
    getAuth: () => { access_token: string; expiresAt: number } | null;
};
