// import Link from 'next/link';
// import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Gaurav Solanki. All rights reserved.</p>
      </div>
    </footer>
  );
}
