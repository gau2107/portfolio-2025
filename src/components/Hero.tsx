export function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Hi, I&apos;m <span className="text-blue-500">Gaurav Solanki</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl mb-6">Senior Frontend Engineer</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Results-driven Frontend Engineer with 6+ years of experience in developing 
              modern, scalable, and high-performance web applications. Expert in TypeScript, 
              React, Next.js, Svelte, and Electron.js.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:solankigaurav2107@gmail.com" 
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="https://www.linkedin.com/in/gaurav-p-solanki/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
            {/* Placeholder for profile image - replace with your actual image path */}
            <div className="w-48 h-48 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-lg">Profile Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
