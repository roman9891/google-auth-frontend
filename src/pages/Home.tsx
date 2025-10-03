import { NavBar } from '../components/NavBar';

export const Home = () => {
    // return (
    //     <div>
    //         HOME
    //         <button
    //             onClick={() => {
    //                 localStorage.removeItem('auth');
    //                 window.location.href = '/login';
    //             }}
    //             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    //         >
    //             Logout
    //         </button>
    //     </div>
    // );
    // same thing but using NavBar component
    return (
        <div>
            <NavBar></NavBar>
            <div className="p-4">HOME</div>
        </div>
    );
};
