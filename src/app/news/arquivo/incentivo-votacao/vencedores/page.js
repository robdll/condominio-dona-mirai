'use client';

import Link from 'next/link';

export default function Vencedores() {
  // Winner data based on the completed draw
  const referralWinner = {
    apartamento: '005',
    bloco: '29',
    protocolo: '5520641976696832',
    indicacoes: 5
  };

  const randomWinners = [
    {
      apartamento: '104',
      bloco: '01',
      protocolo: '4630763140808704'
    },
    {
      apartamento: '002',
      bloco: '14',
      protocolo: '6749398768549888'
    },
    {
      apartamento: '104',
      bloco: '15',
      protocolo: '5927640696094720'
    },
    {
      apartamento: '004',
      bloco: '31',
      protocolo: '5504149302280192'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-radial from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Main Content */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20 dark:border-gray-700/20">
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl text-center font-bold text-gray-900 dark:text-white mb-6">
            🏆 Vencedores da Campanha! 🏆
          </h1>

          {/* Description */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Parabéns aos vencedores da campanha de incentivo à votação! Confira abaixo os resultados do sorteio.
            </p>
          </div>

          {/* Winners Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Referral Winner */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 dark:from-green-800 dark:to-green-900 border-2 border-green-400 dark:border-green-600 rounded-lg p-6 text-center shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                🏆 Vencedor por Indicações! 🏆
              </h3>
              <div className="text-lg text-white space-y-2">
                <p className="font-bold">Apartamento: {referralWinner.apartamento}</p>
                <p className="font-bold">Bloco: {referralWinner.bloco}</p>
                <p className="font-bold">Protocolo: {referralWinner.protocolo}</p>
                <p className="text-base mt-3 text-green-100">Com {referralWinner.indicacoes} indicações!</p>
              </div>
            </div>

            {/* Random Winners */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 dark:from-purple-800 dark:to-purple-900 border-2 border-purple-400 dark:border-purple-600 rounded-lg p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4 text-center flex items-center justify-center gap-2">
                🎲 Vencedores do Sorteio Aleatório! 🎲
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {randomWinners.map((winner, index) => (
                  <div 
                    key={index} 
                    className="bg-blue-900 dark:bg-blue-950 rounded-lg p-3 border border-purple-300 dark:border-purple-500 shadow-md"
                  >
                    <h4 className="text-sm font-bold text-white mb-2">
                      Vencedor #{index + 1}
                    </h4>
                    <div className="text-sm text-white space-y-1">
                      <p className="font-bold">Apt: {winner.apartamento}</p>
                      <p className="font-bold">Bloco: {winner.bloco}</p>
                      <p className="font-bold text-xs break-all">Protocolo: {winner.protocolo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Back Links */}
          <section className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/20 dark:to-gray-600/20 p-6 rounded-lg border border-gray-200 dark:border-gray-600/30">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    Ver Lista de Participantes
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Consulte a lista completa de todos os participantes da campanha.
                  </p>
                  <Link 
                    href="/news/arquivo/incentivo-votacao/participantes"
                    className="inline-flex items-center px-6 py-3 bg-brandBtn hover:bg-brandBtnHover text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Ver Lista Completa
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/20 dark:to-gray-600/20 p-6 rounded-lg border border-gray-200 dark:border-gray-600/30">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    Ver Regulamento
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Consulte as regras e condições da campanha de incentivo à participação.
                  </p>
                  <Link 
                    href="/news/arquivo/incentivo-votacao/regras"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Ver Regulamento Completo
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-700 dark:text-gray-200 text-sm">
            Condomínio Dona Mirai - Vencedores da Campanha de Incentivo à Votação
          </p>
        </div>
      </div>
    </div>
  );
}

