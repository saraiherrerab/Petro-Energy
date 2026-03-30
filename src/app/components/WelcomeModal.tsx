import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasSeenWelcome", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-lg shadow-2xl max-w-lg w-full mx-4 p-6 animate-in fade-in zoom-in duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="mb-4">
          <div className="flex items-center justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <span className="font-bold text-3xl text-white">PE</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
            {t('welcome.title')}
          </h2>
        </div>

        <div className="space-y-4 text-gray-600">
          <p className="text-sm leading-relaxed">
            {t('welcome.message')}
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-sm font-medium text-blue-900">
              {t('welcome.note')}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleClose}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('welcome.button')}
          </button>
        </div>
      </div>
    </div>
  );
}
