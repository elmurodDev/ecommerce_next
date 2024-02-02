import Link from 'next/link'
export default function Navbar() {
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-5">
                    <Link href="/" className="hover:text-white font-medium cursor-pointer">Home</Link>
                    <Link href={'/products'} className="hover:text-white font-medium cursor-pointer">All products</Link>
                </nav>
                {/* <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Button
                </button> */}

                <div className="space-x-3">
                    <button className="button bg-blue-600 border border-transparent text-white text-base font-medium hover:bg-transparent hover:border-blue-600 transition-all delay-100">
                        Sign In
                    </button>
                    <button className="button bg-transparent border border-blue-600 text-white text-base font-medium hover:bg-blue-600 hover:border-transparent transition-all delay-100">
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    )
}