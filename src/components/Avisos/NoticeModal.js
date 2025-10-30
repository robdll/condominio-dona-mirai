'use client';

import { avisoCategories } from './avisos.constant.js';
import { formatDate } from '../../lib/utils';

export default function NoticeModal({ aviso, isOpen, onClose }) {
  if (!isOpen || !aviso) return null;

  const category = avisoCategories.find(cat => cat.name === aviso.category);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                {formatDate(aviso.date)}
              </span>
              {category && (
                <span className={`text-xs px-2 py-1 rounded-full ${category.color}`}>
                  {category.name}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <h1 className="text-base md:text-3xl font-bold">
            {aviso.title}
          </h1>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="whitespace-pre-line text-gray-700 dark:text-gray-200 leading-relaxed">
              {aviso.description}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 dark:bg-gray-700/50 px-6 py-4 border-t border-gray-200 dark:border-gray-600">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Condomínio Dona Mirai - Avisos e Comunicações
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
