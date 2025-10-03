// react nav bar component with tailwind css and logout button
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';

export const NavBar = () => {
    const handleLogout = () => {
        logout();
        window.location.href = '/login'; // Redirect to login page after logout
    };

    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <div className="text-lg font-bold">
                <Link to="/">MyApp</Link>
            </div>
            <Link to="/about">
                <button>About</button>
            </Link>

            <div>
                <span className="mr-4">Username</span>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};
