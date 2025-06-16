import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ImageObj = { src: string; title?: string };
type InterestModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  images: ImageObj[];
};

export const InterestModal: React.FC<InterestModalProps> = ({ open, onClose, title, images }) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!open) setCurrent(0);
  }, [open]);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full relative"
            initial={{ scale: 0.95, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 40 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="relative z-10">
              <button
                className="absolute top-0 right-0 text-3xl font-bold text-gray-400 hover:text-blue-600 transition-colors rounded-full w-10 h-10 flex items-center justify-center"
                style={{ zIndex: 20 }}
                onClick={onClose}
                aria-label="Close"
                type="button"
              >
                &times;
              </button>
            </div>
            {images.length > 0 && (
              <div className="relative flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center w-full">
                  <button
                    className="absolute left-0 px-2 py-1 text-3xl text-gray-400 hover:text-blue-500"
                    onClick={prev}
                    aria-label="Previous"
                    disabled={images.length < 2}
                    tabIndex={images.length < 2 ? -1 : 0}
                  >
                    &#8592;
                  </button>
                  <div className="relative w-full flex justify-center">
                    <img
                      src={images[current].src}
                      alt={images[current].title || `Interest ${title} ${current + 1}`}
                      className="rounded-md max-h-[32rem] object-contain mx-auto"
                    />
                    {images[current].title && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center">
                        <span className="bg-black/60 text-white text-base font-medium px-4 py-1 rounded-t-md mt-0.5 max-w-[90%] truncate text-center">
                          {images[current].title}
                        </span>
                      </div>
                    )}
                    {images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/40 px-2 py-0.5 rounded-full">
                        {images.map((_, idx) => (
                          <span
                            key={idx}
                            className={`inline-block w-3 h-3 rounded-full transition-colors ${
                              idx === current
                                ? 'bg-blue-400'
                                : 'bg-gray-200/70 dark:bg-gray-700/70'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <button
                    className="absolute right-0 px-2 py-1 text-3xl text-gray-400 hover:text-blue-500"
                    onClick={next}
                    aria-label="Next"
                    disabled={images.length < 2}
                    tabIndex={images.length < 2 ? -1 : 0}
                  >
                    &#8594;
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
