'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import ApartmentCard from '@/components/espacoAdministracao/apartmentCard/ApartmentCard';
import { apartments } from '@/components/espacoAdministracao/apartments.constant';

export default function ApartamentosPage() {
  const [filters, setFilters] = useState({
    furniture: '',
    block: '',
    rooms: '',
    photos: ''
  });

  const filteredApartments = useMemo(() => {
    return apartments.filter(apartment => {
      // Furniture filter
      if (filters.furniture && apartment.furniture !== filters.furniture) {
        return false;
      }
      
      // Block filter
      if (filters.block && apartment.blockNumber !== filters.block) {
        return false;
      }
      
      // Rooms filter
      if (filters.rooms && apartment.rooms.toString() !== filters.rooms) {
        return false;
      }
      
      // Photos filter
      if (filters.photos === 'with' && apartment.images.length === 0) {
        return false;
      }
      if (filters.photos === 'without' && apartment.images.length > 0) {
        return false;
      }
      
      return true;
    });
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">Apartamentos Disponíveis</h1>
              <Link 
                href="/news/espaco-administracao/regras"
                className="bg-brandBtn text-white px-4 py-2 rounded-lg hover:bg-brandBtnHover transition-colors"
              >
                Ver Regras
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center md:justify-start space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-100 rounded-full">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">{filteredApartments.length}</span>
                <span className="text-gray-600 ml-1">apartamentos</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="p-2 bg-green-100 rounded-full">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">
                  {filteredApartments.filter(apt => apt.furniture === 'full').length}
                </span>
                <span className="text-gray-600 ml-1">mobiliados</span>
              </div>
            </div>
          </div>

          {/* Filter Options */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
              <button
                onClick={() => setFilters({ furniture: '', block: '', rooms: '', photos: '' })}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Limpar filtros
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobiliário</label>
                <select 
                  value={filters.furniture}
                  onChange={(e) => handleFilterChange('furniture', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Todos</option>
                  <option value="full">Mobiliado</option>
                  <option value="partial">Parcialmente mobiliado</option>
                  <option value="no">Vazio</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bloco</label>
                <select 
                  value={filters.block}
                  onChange={(e) => handleFilterChange('block', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Todos</option>
                  <option value="A">Bloco A</option>
                  <option value="B">Bloco B</option>
                  <option value="C">Bloco C</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quartos</label>
                <select 
                  value={filters.rooms}
                  onChange={(e) => handleFilterChange('rooms', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Todos</option>
                  <option value="2">2 quartos</option>
                  <option value="3">3 quartos</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fotos</label>
                <select 
                  value={filters.photos}
                  onChange={(e) => handleFilterChange('photos', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Todos</option>
                  <option value="with">Com fotos</option>
                  <option value="without">Sem fotos</option>
                </select>
              </div>
            </div>
          </div>

          {/* Apartments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApartments.map((apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>

          {/* Empty State */}
          {filteredApartments.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum apartamento disponível</h3>
              <p className="text-gray-600">Ainda não há apartamentos cadastrados para aluguel.</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Interessado em oferecer seu apartamento?
            </h3>
            <p className="text-blue-800 mb-6">
              Sinalize no grupo para participar da proposta o envie uma mesagem a +393513184484.
            </p>
            <Link 
              href="/news/espaco-administracao/regras"
              className="bg-brandBtn text-white px-6 py-3 rounded-lg hover:bg-brandBtnHover transition-colors font-medium"
            >
              Ver Regras da Proposta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
