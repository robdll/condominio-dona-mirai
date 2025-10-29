'use client';

import Image from 'next/image';
import { useState } from 'react';
import NoticeCard from '../../components/Avisos/NoticeCard';
import NoticeModal from '../../components/Avisos/NoticeModal';
import { avisos } from '../../components/Avisos/avisos.constant';

export default function Avisos() {
  const [selectedAviso, setSelectedAviso] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (aviso) => {
    setSelectedAviso(aviso);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAviso(null);
  };

  return (
    <div className="min-h-screen bg-gradient-radial from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl min-h-[calc(100vh-8rem)]">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Avisos do Condomínio
          </h1>
        </div>

        {/* Avisos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {avisos.map((aviso) => (
            <NoticeCard
              key={aviso.id}
              aviso={aviso}
              onReadMore={handleReadMore}
            />
          ))}
        </div>

        {/* Empty State */}
        {avisos.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Nenhum aviso encontrado
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Não há avisos disponíveis no momento.
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-700 dark:text-gray-200 text-sm">
            Condomínio Dona Mirai - Avisos e Comunicações
          </p>
        </div>
      </div>

      {/* Notice Modal */}
      <NoticeModal
        aviso={selectedAviso}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
