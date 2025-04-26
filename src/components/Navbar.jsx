import {handleSmoothScroll} from "../helpers/HelperFunctions.js";
import {ArrowRightIcon} from '@heroicons/react/solid';

export default function Navbar() {

    return (
        <header className="top-0 z-10 bg-gray-800 md:sticky">
            <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
                <a className="mb-4 font-medium text-white title-font md:mb-0">
                    <a
                        href="#about"
                        className="ml-3 text-xl"
                        onClick={handleSmoothScroll}>
                        Konrad Krasocki
                    </a>
                </a>
                <nav
                    className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700">
                    <a
                        href="#projects"
                        className="mr-5 hover:text-white"
                        onClick={handleSmoothScroll}>
                        Past Work
                    </a>
                    <a
                        href="#skills"
                        className="mr-5 hover:text-white"
                        onClick={handleSmoothScroll}>
                        Skills
                    </a>
                    <a
                        href="#testimonials"
                        className="mr-5 hover:text-white"
                        onClick={handleSmoothScroll}>
                        Testimonials
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 md:mt-0"
                    onClick={handleSmoothScroll}>
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1"/>
                </a>
            </div>
        </header>
    );
}
