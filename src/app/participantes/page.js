'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Participantes() {
  // Sample data - in a real app, this would come from an API or database
  const participantes = [
    { apartamento: '101', bloco: 'A', indicacoes: 5, codigoReferencia: '101-A' },
    { apartamento: '102', bloco: 'A', indicacoes: 3, codigoReferencia: '102-A' },
    { apartamento: '201', bloco: 'A', indicacoes: 7, codigoReferencia: '201-A' },
    { apartamento: '301', bloco: 'A', indicacoes: 2, codigoReferencia: '301-A' },
    { apartamento: '101', bloco: 'B', indicacoes: 4, codigoReferencia: '101-B' },
    { apartamento: '102', bloco: 'B', indicacoes: 6, codigoReferencia: '102-B' },
    { apartamento: '201', bloco: 'B', indicacoes: 1, codigoReferencia: '201-B' },
    { apartamento: '301', bloco: 'B', indicacoes: 8, codigoReferencia: '301-B' },
    { apartamento: '101', bloco: 'C', indicacoes: 3, codigoReferencia: '101-C' },
    { apartamento: '102', bloco: 'C', indicacoes: 5, codigoReferencia: '102-C' },
  ];

  return (
    <div className="min-h-screen bg-gradient-radial from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/logo.webp" 
              alt="Condomínio Dona Mirai Logo" 
              width={200}
              height={80}
              className="h-40 w-auto object-contai bg-[#3b4010] py-1"
            />
          </div>
        </div>


        {/* Main Content */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20 dark:border-gray-700/20">
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl text-center font-bold text-gray-800 dark:text-white mb-6">
            Lista de Participantes
          </h1>

          {/* Description */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Acompanhe aqui a lista de todos os condôminos que participaram da campanha de incentivo à votação. 
              A tabela mostra o número de indicações de cada participante e seus respectivos códigos de referência.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total de Participantes</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{participantes.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center">
                <div className="p-2 bg-green-500 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total de Indicações</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {participantes.reduce((sum, p) => sum + p.indicacoes, 0)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Líder em Indicações</p>
                  <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
                    {participantes.reduce((max, p) => p.indicacoes > max.indicacoes ? p : max, participantes[0])?.apartamento}-{participantes.reduce((max, p) => p.indicacoes > max.indicacoes ? p : max, participantes[0])?.bloco}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Apartamento
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Bloco
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Indicações
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Código de Referência
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {participantes
                  .sort((a, b) => b.indicacoes - a.indicacoes) // Sort by referrals descending
                  .map((participante, index) => (
                    <tr 
                      key={`${participante.apartamento}-${participante.bloco}`}
                      className={`hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                        index === 0 ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20' : ''
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {index === 0 && (
                            <div className="flex-shrink-0 mr-3">
                              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </div>
                            </div>
                          )}
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {participante.apartamento}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">
                          {participante.bloco}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            participante.indicacoes >= 7 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                              : participante.indicacoes >= 4
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                              : participante.indicacoes >= 2
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                          }`}>
                            {participante.indicacoes}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <code className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded font-mono">
                            {participante.codigoReferencia}
                          </code>
                          <button 
                            onClick={() => navigator.clipboard.writeText(participante.codigoReferencia)}
                            className="ml-2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            title="Copiar código"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              * A lista é atualizada conforme novos participantes se inscrevem na campanha
            </p>
          </div>

          {/* Back to Rules Link */}
          <section className="mt-10">
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/20 dark:to-gray-600/20 p-6 rounded-lg border border-gray-200 dark:border-gray-600/30">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Voltar ao Regulamento
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Consulte novamente as regras e condições da campanha de incentivo à participação.
                </p>
                <Link 
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Ver Regulamento Completo
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Condomínio Dona Mirai - Lista de Participantes
          </p>
        </div>
      </div>
    </div>
  );
}
