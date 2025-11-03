'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { furnitureOptions } from '../apartments.constant';

const ApartmentCard = ({ apartment, isOpen: controlledIsOpen, onClose: controlledOnClose }) => {
  const router = useRouter();
  const [internalIsModalOpen, setInternalIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use controlled state if provided, otherwise use internal state
  const isModalOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsModalOpen;
  
  // Sync internal state with controlled prop
  useEffect(() => {
    if (controlledIsOpen !== undefined) {
      setInternalIsModalOpen(controlledIsOpen);
    }
  }, [controlledIsOpen]);

  const handleCardClick = () => {
    if (controlledIsOpen !== undefined && controlledOnClose) {
      // If controlled, update URL
      router.push(`/news/espaco-administracao/apartamentos/${apartment.id}`);
    } else {
      // If uncontrolled, use internal state
      setInternalIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsModalOpen(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % apartment.images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length);
  };

  const getFurnitureColor = (furniture) => {
    switch (furniture) {
      case 'full':
        return 'bg-green-100 text-green-800';
      case 'partial':
        return 'bg-yellow-100 text-yellow-800';
      case 'no':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getFloorDisplay = (floor) => {
    if (floor === 0) {
      return 'Térreo';
    } else if (floor === 1) {
      return 'Primeiro';
    } else {
      return `${floor}º`;
    }
  };

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200"
        onClick={handleCardClick}
      >
        <div className="p-6">
          {/* Title */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Apt {apartment.apartmentNumber} Bloco {apartment.blockNumber}
            </h3>
          </div>
          
          {/* Information */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Andar</div>
              <div className="font-semibold text-gray-900">{getFloorDisplay(apartment.floor)}</div>
            </div>

            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Quartos</div>
              <div className="font-semibold text-gray-900">{apartment.rooms}</div>
            </div>
            
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Móveis</div>
              <div className={`inline-block px-2 py-1 rounded text-sm font-medium ${getFurnitureColor(apartment.furniture)}`}>
                {apartment.furniture === 'full' ? 'Sim' : apartment.furniture === 'partial' ? 'Parcialmente' : 'Não'}
              </div>
            </div>

            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Preço</div>
              <div className="text-lg font-bold text-green-600">
                R$ {apartment.monthlyRent.toLocaleString('pt-BR')}
              </div>
            </div>
          </div>
          
          {/* Photo */}
          <div className="mt-4">
            {apartment.images.length > 0 ? (
              <div className="relative w-full h-48 rounded-md overflow-hidden">
                <Image 
                  src={apartment.images[0]} 
                  alt={`Apartamento ${apartment.apartmentNumber}`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-2 md:p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">
                Apartamento {apartment.apartmentNumber} - Bloco {apartment.blockNumber}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
              >
                ×
              </button>
            </div>
            
            <div className="pt-2 overflow-y-auto max-h-[calc(90vh-120px)]">
              {apartment.images.length > 0 ? (
                <div className="mb-6">
                  <div className="relative">
                    <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                      <Image 
                        src={apartment.images[currentImageIndex]} 
                        alt={`Apartamento ${apartment.apartmentNumber} - Foto ${currentImageIndex + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    {/* Navigation Controls */}
                    {apartment.images.length > 1 && (
                      <>
                        <button
                          onClick={goToPreviousImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200/80 hover:bg-gray-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>

                        <button
                          onClick={goToNextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200/80 hover:bg-gray-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-200/80 px-3 py-1 rounded-full text-sm font-medium">
                          {currentImageIndex + 1} / {apartment.images.length}
                        </div>

                        {/* Dots Navigation */}
                        <div className="absolute bottom-4 right-4 flex space-x-2">
                          {apartment.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                index === currentImageIndex
                                  ? 'bg-blue-600'
                                  : 'bg-white/60 hover:bg-white/80'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="mb-6 p-8 bg-gray-100 rounded-lg text-center text-gray-500">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p>Nenhuma foto disponível</p>
                </div>
              )}
              
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Informações do Apartamento</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Número:</span>
                        <span className="font-medium">{apartment.apartmentNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bloco:</span>
                        <span className="font-medium">{apartment.blockNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Andar:</span>
                        <span className="font-medium">{getFloorDisplay(apartment.floor)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Quartos:</span>
                        <span className="font-medium">{apartment.rooms}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mobiliário:</span>
                        <span className={`px-2 py-1 rounded text-sm ${getFurnitureColor(apartment.furniture)}`}>
                          {furnitureOptions[apartment.furniture]}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Aluguel mensal:</span>
                        <span className="text-xl font-bold text-green-600">
                          R$ {apartment.monthlyRent.toLocaleString('pt-BR')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Descrição</h3>
                  <p className="text-gray-600">{apartment.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApartmentCard;
