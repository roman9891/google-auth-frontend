import { useState } from 'react';
import { login } from '../services/auth';

// In LoginForm.tsx
interface LoginFormProps {
    setIsLogin: (isLogin: boolean) => void;
    // ...other props
}

export const LoginForm: React.FC<LoginFormProps> = ({ setIsLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invalidLogin, setInvalidLogin] = useState(false);

    const loginSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log({ username, password });

        let loginRes;
        try {
            loginRes = await login(username, password);
            console.log('Login successful:', loginRes);
            setInvalidLogin(false);
            // redirect to /
            window.location.href = '/';
        } catch (error) {
            console.error('Login failed:', error);
            setInvalidLogin(true);
        }
    };

    return (
        <form className="flex flex-col space-y-4" onSubmit={loginSubmitHandler}>
            <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-300">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-300">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            {invalidLogin && (
                <p className="text-red-500">Invalid username or password. Please try again.</p>
            )}
            <input
                type="submit"
                value="Submit"
                className="w-full cursor-pointer rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="w-full cursor-pointer rounded-md bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
                Register
            </button>
            <a
                href="http://localhost:3000/auth/google"
                className="w-full rounded-md bg-red-600 px-4 py-2 text-center font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
                Sign in with Google
            </a>
        </form>
    );
};
