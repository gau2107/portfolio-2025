import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Gaurav Solanki</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="hover:text-blue-500 transition-colors">About</Link>
            <Link href="#experience" className="hover:text-blue-500 transition-colors">Experience</Link>
            <Link href="#skills" className="hover:text-blue-500 transition-colors">Skills</Link>
            <Link href="#education" className="hover:text-blue-500 transition-colors">Education</Link>
            <Link href="#contact" className="hover:text-blue-500 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
