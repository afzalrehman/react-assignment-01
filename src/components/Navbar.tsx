import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Link>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
            <li>
              <Link
                to="/"
                className="block rounded-sm px-3 py-2 text-blue-700 md:p-0 dark:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block rounded-sm px-3 py-2 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="block rounded-sm px-3 py-2 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block rounded-sm px-3 py-2 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
