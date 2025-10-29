import Image from 'next/image';

export default function EspacoAdministracao() {
  return (
    <div className="min-h-screen bg-gradient-radial from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/logo.webp" 
              alt="Condomínio Dona Mirai Logo" 
              width={200}
              height={80}
              className="h-40 w-auto object-contain bg-[#3b4010] py-1"
            />
          </div>
        </div>

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
              Esta seção está em desenvolvimento e será implementada em breve.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-8 rounded-lg border border-orange-200 dark:border-orange-800">
              <h2 className="text-2xl font-bold text-orange-800 dark:text-orange-200 mb-4">
                🚧 Em Construção
              </h2>
              <p className="text-orange-700 dark:text-orange-300 mb-6">
                Estamos trabalhando para trazer funcionalidades administrativas completas para o condomínio. 
                Em breve você terá acesso a:
              </p>
              
              <ul className="text-left text-orange-700 dark:text-orange-300 space-y-2 max-w-md mx-auto">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Gestão de reservas de áreas comuns
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sistema de tickets e solicitações
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Controle de acesso e visitantes
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Relatórios e estatísticas
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Comunicação interna
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <a 
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Voltar ao Início
              </a>
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
