import Link from 'next/link';
import Image from 'next/image';

export default function Regras() {
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
          
          <h3 className="text-2xl text-center font-bold text-gray-900 dark:text-white mb-8">Regulamento do Incentivo à Participação na Votação</h3>

          {/* Section 1 - Objetivo */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Objetivo</h3>
            </div>
            <div className="pl-4 lg:pl-16">
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                A campanha tem como finalidade incentivar a participação dos condôminos na votação referente ao deslocamento da porta da varanda.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                A participação é totalmente gratuita, não havendo qualquer custo para os condôminos.
              </p>
            </div>
          </section>

          {/* Section 2 - Premiação */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Premiação</h3>
            </div>
            <div className="pl-4 lg:pl-16">
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                O total da premiação é de <span className="font-bold text-green-600 dark:text-green-400 text-xl">R$ 750,00</span> (setecentos e cinquenta reais), distribuídos da seguinte forma:
              </p>
              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-semibold text-gray-800 dark:text-white">
                    <span className="text-yellow-600 dark:text-yellow-400">R$ 250,00</span> – para o condômino que conseguir o maior número de indicações (referrals).
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold text-gray-800 dark:text-white">
                    <span className="text-blue-600 dark:text-blue-400">R$ 200,00</span> – sorteado entre os participantes elegíveis.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="font-semibold text-gray-800 dark:text-white">
                    <span className="text-purple-600 dark:text-purple-400">R$ 150,00</span> – sorteado entre os participantes elegíveis.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-4 rounded-lg border-l-4 border-pink-500">
                  <p className="font-semibold text-gray-800 dark:text-white">
                    <span className="text-pink-600 dark:text-pink-400">R$ 100,00</span> – sorteado entre os participantes elegíveis.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-4 rounded-lg border-l-4 border-indigo-500">
                  <p className="font-semibold text-gray-800 dark:text-white">
                    <span className="text-indigo-600 dark:text-indigo-400">R$ 50,00</span> – sorteado entre os participantes elegíveis.
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-semibold text-gray-800 dark:text-white">
                  <span className="text-red-600 dark:text-red-400">👉 Condição:</span> os prêmios somente serão entregues caso sejam alcançados pelo menos <span className="font-bold">300 votos totais</span> na votação.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 - Como participar */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Como participar</h3>
            </div>
            <div className="pl-4 lg:pl-16">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="self-start w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1 flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    O condômino deve realizar a votação pelo aplicativo <span className="font-semibold text-purple-600 dark:text-purple-400">Condomob</span>.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center sm:flex-row gap-3 mb-4">
                  <Link 
                    href="https://play.google.com/store/apps/details?id=agile.ti.mobile.condomob&hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" aria-hidden="true" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0,0h40v40H0V0z"></path><g><path d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z" fill="#EA4335"></path><path d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z" fill="#FBBC04"></path><path d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z" fill="#4285F4"></path><path d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z" fill="#34A853"></path></g></svg>
                    <div className="text-nowrap">Play Store</div>
                  </Link>
                  <Link 
                    href="https://apps.apple.com/br/app/condomob-condom%C3%ADnios/id1136370866" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-[#eeedec] hover:bg-[#cecdcc] text-gray-800 rounded-lg transition-colors font-medium"
                  >
                    <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                    Apple Store
                  </Link>
                </div>
                <div className="flex items-center">
                  <div className="self-start w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1 flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    Após votar, deve enviar via WhatsApp para o número <Link href="https://wa.me/393513184484" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 underline transition-colors">+39 351 318 4484</Link>:
                  </p>
                </div>
                <div className="ml-9 space-y-2">
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    • Screenshot do comprovante de voto (com o número de protocolo visível; não é necessário mostrar a opção escolhida);
                  </p>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    • Número do bloco e do apartamento.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="self-start w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1 flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    Após o envio, o participante receberá um código exclusivo para indicar a outros condôminos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 - Indicações */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                4
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Indicações (Referrals)</h3>
            </div>
            <div className="pl-4 lg:pl-16 space-y-4">
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                O condômino poderá compartilhar seu código exclusivo com outros condôminos, incentivando-os a votar.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Cada novo participante deverá informar, junto ao envio do seu próprio screenshot, o código do condômino que o incentivou a votar.
              </p>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="font-semibold text-gray-800 dark:text-white">
                  O condômino que obtiver o maior número de indicações válidas será o vencedor do prêmio de <span className="text-orange-600 dark:text-orange-400">R$ 250,00</span>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 - Sorteio */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                5
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Sorteio</h3>
            </div>
            <div className="pl-4 lg:pl-16 space-y-4">
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Além do prêmio de indicações, todos os condôminos que enviarem o screenshot conforme descrito no item 3 participarão automaticamente de um sorteio.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Serão sorteados 4 participantes distintos, com prêmios de R$ 200, R$ 150, R$ 100 e R$ 50, respectivamente.
              </p>
              <div className="bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-gray-800 dark:text-white">
                  O sorteio será realizado ao vivo, utilizando uma ferramenta online de randomização, garantindo transparência no processo.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 - Prazo */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                6
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Prazo da campanha</h3>
            </div>
            <div className="pl-4 lg:pl-16 space-y-4">
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                A campanha será válida até a conclusão da votação sobre a proposta (aprovação ou rejeição).
              </p>
            </div>
          </section>

          {/* Section 7 - Pagamento */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                7
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Pagamento</h3>
            </div>
            <div className="pl-4 lg:pl-16 space-y-4">
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Os prêmios serão pagos exclusivamente via <span className="font-semibold text-emerald-600 dark:text-emerald-400">PIX</span>.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Os vencedores deverão fornecer uma chave PIX válida para receber a premiação.
              </p>
            </div>
          </section>

          {/* Section 8 - Disposições finais */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                8
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Disposições finais</h3>
            </div>
            <div className="pl-4 lg:pl-16 space-y-4">
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                A participação na campanha implica aceitação integral deste regulamento.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Em caso de empate no número de indicações, o prêmio de R$ 250,00 será dividido igualmente entre os empatados.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                O organizador se reserva o direito de validar os dados enviados, assegurando a regularidade da participação.
              </p>
            </div>
          </section>

          {/* Disclaimer Section */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                ⚠️
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Nota importante</h3>
            </div>
            <div className="pl-4 lg:pl-16">
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 p-6 rounded-lg border-l-4 border-amber-500">
                <p className="text-gray-800 dark:text-white font-semibold mb-4">
                  Esta Campanha de Incentivo à Participação:
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span>não possui fins comerciais;</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span>é uma iniciativa voluntária de um dos condôminos e não foi deliberada pelo condomínio;</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span>não há custo para participar;</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
                    <span>em caso de premiação, cabe exclusivamente ao condômino contemplado a declaração da renda recebida perante a Receita Federal, se aplicável.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Action Links */}
          <section className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700/30">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    Acompanhe os Participantes
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 mb-6">
                    Veja a lista atualizada de todos os condôminos que participaram da campanha e acompanhe o ranking de indicações.
                  </p>
                  <Link 
                    href="/incentivo-votacao/participantes"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Ver Lista de Participantes
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg border border-purple-200 dark:border-purple-600/30">
                  <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">
                    🎉 Sorteio dos 4 Sortudos! 🎉
                  </h3>
                  <p className="text-purple-700 dark:text-purple-200 mb-6">
                    Descubra quem são os vencedores! Escolha entre sorteio por indicações ou sorteio aleatório.
                  </p>
                  <Link 
                    href="/incentivo-votacao/sorteio"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Ir para o Sorteio
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-700 dark:text-gray-200 text-sm">
            Condomínio Dona Mirai - Campanha de Incentivo à Participação
          </p>
        </div>
      </div>
    </div>
  );
}
