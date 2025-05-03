import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

export function Contact() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div id="contact" className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I&apos;m always open to discussing new projects, opportunities in technology, 
              or potential collaborations. Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <FaEnvelope className="text-blue-500 text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:solankigaurav2107@gmail.com" 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    solankigaurav2107@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaPhone className="text-blue-500 text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a 
                    href="tel:+917621961734" 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    +91 7621961734
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Plot no- 22/2, near Swaminarayan Temple, Sector- 2A, Gandhinagar, Gujarat
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaLinkedin className="text-blue-500 text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold mb-1">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/gaurav-p-solanki/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/gaurav-p-solanki
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
