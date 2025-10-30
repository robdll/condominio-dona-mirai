import Image from 'next/image';
import Link from 'next/link';

export default function EspacoAdministracao() {
  return (
    <div className="min-h-screen bg-gradient-radial from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">

        {/* Main Content */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20 dark:border-gray-700/20">
          
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Espaço Administração
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Proposta temporária para retomada dos espaços comuns do condomínio.
            </p>

            {/* Resumo da Proposta */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-8 rounded-lg border border-orange-200 dark:border-orange-800 mb-8">
              <h2 className="text-2xl font-bold text-orange-800 dark:text-orange-200 mb-4">
                📋 Resumo da Proposta
              </h2>
              <p className="text-orange-700 dark:text-orange-300 mb-4">
                Para acelerar a devolução da Sala de Poker e Sala de Lavanderia aos moradores, 
                propomos alugar temporariamente um apartamento do condomínio para abrigar a administração.
              </p>
              <div className="text-orange-700 dark:text-orange-300 text-sm">
                <p><strong>Custo estimado:</strong> R$ 5 por unidade/mês por 12 meses</p>
                <p><strong>Benefício:</strong> Recuperação imediata dos espaços comuns</p>
              </div>
            </div>

            {/* Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Link 
                href="/news/espaco-administracao/regras"
                className="group bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-200"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">
                    Regras da Proposta
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    Entenda o objetivo e os detalhes da proposta para retomada dos espaços comuns.
                  </p>
                </div>
              </Link>

              <Link 
                href="/news/espaco-administracao/apartamentos"
                className="group bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-lg border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-200"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
                    Apartamentos Disponíveis
                  </h3>
                  <p className="text-green-700 dark:text-green-300">
                    Veja os apartamentos oferecidos para aluguel temporário da administração.
                  </p>
                </div>
              </Link>
            </div>

            <div className="mt-8">
              <Link 
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Voltar ao Início
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Condomínio Dona Mirai - Espaço Administração
          </p>
        </div>
      </div>
    </div>
  );
}
