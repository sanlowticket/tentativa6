import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X } from 'lucide-react';

export default function PurchaseNotifications() {
  const [currentNotification, setCurrentNotification] = useState<number | null>(null);

  const femaleNames = [
    "Maria Silva",
    "Ana Costa",
    "Carla Oliveira",
    "Fernanda Santos",
    "Juliana Ferreira",
    "Patricia Rodrigues",
    "Luciana Almeida",
    "Mariana Pereira",
    "Cristina Lima",
    "Daniela Souza",
    "Gabriela Martins",
    "Helena Barbosa",
    "Isabela Ribeiro",
    "Leticia Gomes",
    "Monica Cardoso",
    "Natália Dias",
    "Priscila Moreira",
    "Renata Nascimento",
    "Sabrina Correia",
    "Tatiana Mendes",
    "Vanessa Castro",
    "Viviane Araújo"
  ];

  const getRandomName = () => {
    return femaleNames[Math.floor(Math.random() * femaleNames.length)];
  };

  const showNotification = () => {
    const notificationId = Date.now();
    setCurrentNotification(notificationId);
    
    // Auto hide after 8 seconds
    setTimeout(() => {
      setCurrentNotification(null);
    }, 8000);
  };

  const hideNotification = () => {
    setCurrentNotification(null);
  };

  useEffect(() => {
    const intervals = [15000, 30000, 55000]; // 15s, 30s, 55s
    let currentIndex = 0;

    const scheduleNext = () => {
      const delay = intervals[currentIndex];
      currentIndex = (currentIndex + 1) % intervals.length;
      
      setTimeout(() => {
        showNotification();
        scheduleNext(); // Schedule the next notification
      }, delay);
    };

    // Start the cycle
    scheduleNext();

    // Cleanup function
    return () => {
      setCurrentNotification(null);
    };
  }, []);

  return (
    <AnimatePresence>
      {currentNotification && (
        <motion.div
          key={currentNotification}
          initial={{ opacity: 0, x: -100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-4 z-50 max-w-xs"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg border border-green-600 p-3 flex items-center gap-2 relative">
            {/* Close button */}
            <button
              onClick={hideNotification}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-400 hover:bg-gray-500 text-white rounded-full flex items-center justify-center text-xs transition-colors"
            >
              <X className="w-3 h-3" />
            </button>

            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-green-600" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-xs font-semibold text-white">
                {getRandomName()}
              </p>
              <p className="text-xs text-white">
                Acabou de Comprar os Moldes!
              </p>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-100 rounded-full animate-pulse"></div>
                <span className="text-xs text-white font-medium">
                  Compra confirmada
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}