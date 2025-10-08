import { useState } from 'react';
import { useAuth } from '../services/auth';

export const RegisterForm = () => {
    const { register } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const registerSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== repassword) {
            alert('Passwords do not match!');
            return;
        }

        let registerRes;
        try {
            registerRes = await register(username, password);
            console.log('register successful:', registerRes);
            // setInvalidLogin(false);
            // redirect to /
            window.location.href = '/';
        } catch (error) {
            console.error('Login failed:', error);
            // setInvalidLogin(true);
        }

        console.log({ username, password, repassword });
    };

    return (
        <form className="flex flex-col space-y-4" onSubmit={registerSubmitHandler}>
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
            <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-300">Re-enter Password</label>
                <input
                    type="password"
                    value={repassword}
                    onChange={(e) => setRepassword(e.target.value)}
                    className="rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <input
                type="submit"
                value="Submit"
                className="w-full cursor-pointer rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                type="button"
                onClick={() => window.location.reload()}
                className="w-full cursor-pointer rounded-md bg-yellow-600 px-4 py-2 font-semibold text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
                Back to Login
            </button>
        </form>
    );
};
