'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false);
  const [isSorteioDropdownOpen, setIsSorteioDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleNewsDropdown = () => {
    setIsNewsDropdownOpen(!isNewsDropdownOpen);
  };

  const toggleSorteioDropdown = () => {
    setIsSorteioDropdownOpen(!isSorteioDropdownOpen);
  };

  return (
    <nav className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border-b border-gray-200 dark:border-gray-700 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Condomínio Dona Mirai Logo"
              width={120}
              height={48}
              className="h-12 w-auto object-contain bg-[#3b4010] py-1"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Home
            </Link>
            
            <Link 
              href="/avisos" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Avisos
            </Link>

            {/* News Dropdown */}
            <div className="relative">
              <button
                onClick={toggleNewsDropdown}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors flex items-center cursor-pointer"
              >
                News
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isNewsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isNewsDropdownOpen && (
                <div className="absolute top-full left-[-120px] mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                  {/* Sorteio de Votação Accordion */}
                  <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <button
                      onClick={toggleSorteioDropdown}
                      className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <span className="font-medium">Incentivo à Votação</span>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${isSorteioDropdownOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    {/* Accordion Content */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isSorteioDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-4 pb-2 space-y-1">
                        <Link 
                          href="/incentivo-votacao/regras" 
                          className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200 rounded-md cursor-pointer transition-colors"
                          onClick={() => setIsNewsDropdownOpen(false)}
                        >
                          Regras
                        </Link>
                        <Link 
                          href="/incentivo-votacao/participantes" 
                          className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200 rounded-md cursor-pointer transition-colors"
                          onClick={() => setIsNewsDropdownOpen(false)}
                        >
                          Participantes
                        </Link>
                        <Link 
                          href="/incentivo-votacao/sorteio" 
                          className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200 rounded-md cursor-pointer transition-colors"
                          onClick={() => setIsNewsDropdownOpen(false)}
                        >
                          Sorteio
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Espaço Administração */}
                  <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <Link 
                      href="/news/espaco-administracao" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors font-medium"
                      onClick={() => setIsNewsDropdownOpen(false)}
                    >
                      Espaço Administração
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/documentos" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Documentos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
            <div className="space-y-2">
              <Link 
                href="/" 
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link 
                href="/avisos" 
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Avisos
              </Link>

              {/* Mobile News Section */}
              <div className="px-4 py-2">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">News</div>
                <div className="ml-4 space-y-2">
                  {/* Mobile Sorteio Accordion */}
                  <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <button
                      onClick={toggleSorteioDropdown}
                      className="w-full text-left py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <span>Incentivo à Votação</span>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${isSorteioDropdownOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    {/* Mobile Accordion Content */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isSorteioDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="py-2 space-y-1">
                        <Link 
                          href="/incentivo-votacao/regras" 
                          className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200 rounded-lg cursor-pointer transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Regras
                        </Link>
                        <Link 
                          href="/incentivo-votacao/participantes" 
                          className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200 rounded-lg cursor-pointer transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Participantes
                        </Link>
                        <Link 
                          href="/incentivo-votacao/sorteio" 
                          className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200 rounded-lg cursor-pointer transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Sorteio
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Espaço Administração */}
                  <Link 
                    href="/news/espaco-administracao" 
                    className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Espaço Administração
                  </Link>
                </div>
              </div>

              <Link 
                href="/documentos" 
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Documentos
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
