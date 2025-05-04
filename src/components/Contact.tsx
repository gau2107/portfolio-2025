import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export function Contact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div id="contact" className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, opportunities in technology, 
            or potential collaborations. Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <FaEnvelope className="text-blue-500 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a 
              href="mailto:solankigaurav2107@gmail.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              solankigaurav2107@gmail.com
            </a>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <FaPhone className="text-blue-500 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a 
              href="tel:+917621961734" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              +91 7621961734
            </a>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <FaLinkedin className="text-blue-500 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/gaurav-p-solanki/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="mt-14 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <div className="flex items-start">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Plot no- 22/2, near Swaminarayan Temple, Sector- 2A, Gandhinagar, Gujarat
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Gaurav2k50" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/gaurav-p-solanki/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a 
              href="mailto:solankigaurav2107@gmail.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <FaEnvelope className="text-3xl" />
            </a>
          </div>
          <p className="mt-6 text-gray-600 dark:text-gray-400">
            Let&apos;s build something amazing together
          </p>
        </div>
      </div>
    </section>
  );
}
