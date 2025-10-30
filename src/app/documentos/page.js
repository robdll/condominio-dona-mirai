'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { documentos } from '../../components/Documentos/documentos.constant';
import { formatDate } from '../../lib/utils';

export default function Documentos() {
  // Search state
  const [searchTerm, setSearchTerm] = useState('');
  // Sort state
  const [sortField, setSortField] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');

  // Filter and sort documents
  const filteredAndSortedDocumentos = useMemo(() => {
    let filtered = documentos;
    
    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = documentos.filter(documento => 
        documento.name.toLowerCase().includes(term) || 
        documento.description.toLowerCase().includes(term) ||
        formatDate(documento.date).toLowerCase().includes(term)
      );
    }
    
    // Sort documents
    return filtered.sort((a, b) => {
      let aValue, bValue;
      
      if (sortField === 'date') {
        aValue = new Date(a.date);
        bValue = new Date(b.date);
      } else if (sortField === 'name') {
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
      } else {
        aValue = a.description.toLowerCase();
        bValue = b.description.toLowerCase();
      }
      
      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }, [searchTerm, sortField, sortDirection]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-radial from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Documentos do Condomínio
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
            Acesse documentos importantes, formulários e regulamentos do Condomínio Dona Mirai
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20 dark:border-gray-700/20">
          
          {/* Search Input */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Buscar por nome ou descrição..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 dark:focus:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white transition-all duration-200"
              />
            </div>
            {searchTerm && (
              <div className="mt-2 text-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {filteredAndSortedDocumentos.length} documento{filteredAndSortedDocumentos.length !== 1 ? 's' : ''} encontrado{filteredAndSortedDocumentos.length !== 1 ? 's' : ''}
                </span>
              </div>
            )}
          </div>
          
          {/* Table */}
          <div className="overflow-x-auto">
            {filteredAndSortedDocumentos.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-12 text-center">
                <div className="text-gray-400 dark:text-gray-500 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {searchTerm ? 'Nenhum documento encontrado' : 'Nenhum documento disponível'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {searchTerm 
                    ? `Nenhum documento encontrado para "${searchTerm}". Tente uma busca diferente.`
                    : 'Não há documentos disponíveis no momento.'
                  }
                </p>
              </div>
            ) : (
              <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600">
                  <tr>
                    <th 
                      className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      onClick={() => handleSort('date')}
                    >
                      <div className="flex items-center">
                        Data
                        {sortField === 'date' && (
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sortDirection === 'asc' ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      onClick={() => handleSort('name')}
                    >
                      <div className="flex items-center">
                        Nome do Documento
                        {sortField === 'name' && (
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sortDirection === 'asc' ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      onClick={() => handleSort('description')}
                    >
                      <div className="flex items-center">
                        Descrição
                        {sortField === 'description' && (
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sortDirection === 'asc' ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Ação
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredAndSortedDocumentos.map((documento) => (
                    <tr 
                      key={documento.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {formatDate(documento.date)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {documento.name}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-800 dark:text-gray-200 max-w-md">
                          {documento.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {documento.url ? (
                          <Link
                            href={documento.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {documento.action}
                          </Link>
                        ) : (
                          <button 
                            disabled
                            className="inline-flex items-center px-4 py-2 bg-gray-400 text-white text-sm font-medium rounded-lg cursor-not-allowed opacity-50"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Not Available
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Info Note */}
          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
                  Informação Importante
                </h3>
                <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                  <p>
                    Os documentos estão disponíveis para download. Em caso de dúvidas sobre algum documento, 
                    entre em contato com a administração do condomínio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-700 dark:text-gray-200 text-sm">
            Condomínio Dona Mirai - Documentos e Formulários
          </p>
        </div>
      </div>
    </div>
  );
}
