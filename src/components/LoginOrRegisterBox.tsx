import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const LoginOrRegisterBox = () => {
    const [isLogin, setIsLogin] = useState(true); // true for login, false for register

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900">
            <div className="w-full max-w-sm rounded-2xl bg-gray-800 p-8 shadow-lg">
                <h2 className="mb-6 text-center text-2xl font-bold text-white">App Name</h2>
                {isLogin ? (
                    <LoginForm setIsLogin={setIsLogin}></LoginForm>
                ) : (
                    <RegisterForm></RegisterForm>
                )}
            </div>
        </div>
    );
};
