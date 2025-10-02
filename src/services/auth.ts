// auth.js
export function login(username: string, password: string) {
    return fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
    })
        .then((res) => res.json())
        .then((data) => {
            const expiresAt = Date.now() + data.expiresIn * 1000;
            localStorage.setItem('auth', JSON.stringify({ token: data.token, expiresAt }));
            return data;
        });
}

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
