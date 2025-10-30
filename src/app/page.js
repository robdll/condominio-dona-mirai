import Carousel from '../components/shared/Carousel';
import LinkCard from '../components/Home/LinkCard';
import { slides, linkCards } from '../components/Home/home.constant';

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-radial from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Bem-vindos ao Condomínio Dona Mirai
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
            Seu centro de informações e comunicações do condomínio
          </p>
        </div>

        {/* Carousel */}
        <Carousel slides={slides} />

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {linkCards.map((linkCard, index) => (
            <LinkCard key={index} linkCard={linkCard} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-700 dark:text-gray-200 text-sm">
            Condomínio Dona Mirai - Centro de Informações
          </p>
        </div>
      </div>
    </div>
  );
}
