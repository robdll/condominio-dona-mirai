import Link from 'next/link';

export default function RegrasPage() {
  return (
    <div className="min-h-screen bg-gradient-radial from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">Regras do Espaço Administração</h1>
              <Link 
                href="/news/espaco-administracao/apartamentos"
                className="bg-brandBtn text-white px-4 py-2 rounded-lg hover:bg-brandBtnHover transition-colors"
              >
                Ver Apartamentos
              </Link>
            </div>
            <p className="text-gray-600">
              Proposta temporária para retomada dos espaços comuns
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Objetivo da Proposta
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Na última assembleia surgiu a vontade de alguns condôminos de retomar o uso da 
                  <strong> Sala de Poker</strong> e restabelecer a <strong>Sala de Lavanderia</strong> com a empresa Lavatu, 
                  já que, no momento, esse espaço vem sendo usado para a equipe de colaboradores.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    Proposta Temporária
                  </h3>
                  <p className="text-blue-800">
                    Para acelerar a devolução desses ambientes aos moradores, sugerimos alugar um dos apartamentos 
                    do condomínio para abrigar provisoriamente administração e funcionários, até a construção das áreas dedicadas.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Requisitos do Imóvel</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Pode ser vazio (equipe só precisaria de um micro-ondas)</li>
                      <li>• Ou com cozinha equipada</li>
                      <li>• Duas mesas para organizar:</li>
                      <li className="ml-4">- Área para funcionários</li>
                      <li className="ml-4">- Sala para administração</li>
                      <li className="ml-4">- Espaço para a supervisora</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Processo de Escolha</h3>
                    <ol className="space-y-2 text-gray-700">
                      <li>1. Proprietários interessados comunicam bloco/apt, metragem, mobiliado ou não e valor</li>
                      <li>2. Organização de dia de visitas para síndico e Conselho</li>
                      <li>3. Registros e fotos das opções</li>
                      <li>4. Submissão das opções a votação em assembleia</li>
                    </ol>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    Custo Estimado
                  </h3>
                  <p className="text-green-800 mb-2">
                    <strong>Cerca de R$ 5 por unidade/mês, por 12 meses</strong> (valor a confirmar em assembleia)
                  </p>
                  <p className="text-green-700 text-sm">
                    Esta solução antecipa a recuperação dos espaços comuns e garante condições adequadas 
                    para administração e equipe até a conclusão do projeto definitivo.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                    Como Participar
                  </h3>
                  <p className="text-yellow-800">
                    Quem tiver interesse em oferecer o apartamento, por favor, sinalize no grupo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-center">
            <Link 
              href="/news/espaco-administracao/apartamentos"
              className="bg-brandBtn text-white px-6 py-3 rounded-lg hover:bg-brandBtnHover transition-colors font-medium"
            >
              Ver Apartamentos Disponíveis →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
