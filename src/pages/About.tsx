// react component with tailwind styling that uses navbar and in the main section has a mobile friendly column that supports a text description
import { NavBar } from '../components/NavBar';

export const About = () => {
    return (
        <div>
            <NavBar />
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">About Us</h1>
                <p className="mb-2">
                    Welcome to our application! We are dedicated to providing you with the best
                    experience possible.
                </p>
                <p className="mb-2">
                    Our team is passionate about building user-friendly and efficient software
                    solutions that meet your needs.
                </p>
                <p className="mb-2">
                    Whether you're here to manage your tasks, collaborate with others, or simply
                    explore, we're here to help you succeed.
                </p>
                <p className="mb-2">
                    Thank you for choosing our application. We look forward to serving you!
                </p>
            </div>
        </div>
    );
};
