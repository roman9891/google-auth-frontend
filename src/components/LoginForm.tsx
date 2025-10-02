import { useState } from 'react';

export const LoginBox = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ username, password });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900">
            <div className="w-full max-w-sm rounded-2xl bg-gray-800 p-8 shadow-lg">
                <h2 className="mb-6 text-center text-2xl font-bold text-white">App Name</h2>
                <form className="flex flex-col space-y-4" onSubmit={loginSubmitHandler}>
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm text-gray-300">Username/Email</label>
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

                    <input
                        type="submit"
                        value="Submit"
                        className="w-full cursor-pointer rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <a
                        href="http://localhost:3000/auth/google"
                        className="w-full rounded-md bg-red-600 px-4 py-2 text-center font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Sign in with Google
                    </a>
                </form>
            </div>
        </div>
    );
};
