'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Sorteio() {
  const [participantes, setParticipantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [referralWinner, setReferralWinner] = useState(null);
  const [referralButtonDisabled, setReferralButtonDisabled] = useState(false);
  const [randomWinners, setRandomWinners] = useState([]);
  const [randomButtonClicks, setRandomButtonClicks] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentParticipants, setCurrentParticipants] = useState([]);
  const [currentWinner, setCurrentWinner] = useState(null);
  const [flashingParticipants, setFlashingParticipants] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/residents');
        const result = await response.json();
        
        if (result.success) {
          // Add status property to each participant
          const participantsWithStatus = result.data.map(p => ({
            ...p,
            status: 'active' // 'active', 'eliminated', 'winner'
          }));
          setParticipantes(participantsWithStatus);
          setCurrentParticipants(participantsWithStatus);
        } else {
          setError(result.message || 'Failed to fetch residents data');
        }
      } catch (err) {
        setError('Network error: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResidents();
  }, []);

  const handleReferralWinner = () => {
    if (participantes.length === 0) return;
    
    // Find participant with most referrals
    const winner = participantes.reduce((max, p) => {
      if (!p || !p.indicacoes) return max;
      return p.indicacoes > max.indicacoes ? p : max;
    }, participantes[0]);
    
    if (winner) {
      setReferralWinner(winner);
      setReferralButtonDisabled(true);
    }
  };

  const handleRandomWinner = async () => {
    if (currentParticipants.length === 0 || randomButtonClicks >= 4) return;
    
    setIsAnimating(true);
    setCurrentWinner(null);
    
    // Get available participants (not already selected as winners)
    const availableParticipants = participantes.filter(p => 
      p && p.apartamento && p.bloco &&
      !randomWinners.some(winner => 
        winner && winner.apartamento === p.apartamento && winner.bloco === p.bloco
      )
    );
    
    if (availableParticipants.length === 0) {
      setIsAnimating(false);
      return;
    }
    
    // Reset all participants to active status and show all participants
    const resetParticipants = participantes.map(p => {
      if (!p || !p.apartamento || !p.bloco) return p;
      return {
        ...p,
        status: randomWinners.some(winner => 
          winner && winner.apartamento === p.apartamento && winner.bloco === p.bloco
        ) ? 'winner' : 'active'
      };
    });
    
    setCurrentParticipants(resetParticipants);
    setFlashingParticipants([]);
    
    // Wait a moment for the reset to be visible
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Create a copy of available participants for animation
    let remainingParticipants = [...availableParticipants];
    
    // Set a fixed interval time for smooth animation
    const intervalTime = 300; // 300ms between eliminations
    
    // Divide and conquer elimination
    const eliminateInRounds = () => {
      if (remainingParticipants.length <= 1) {
        // Set the winner after animation
        setTimeout(() => {
          const winner = remainingParticipants[0];
          setCurrentWinner(winner);
          setRandomWinners(prev => [...prev, winner]);
          setRandomButtonClicks(prev => prev + 1);
          
          // Update winner status
          setCurrentParticipants(prev => 
            prev.map(p => 
              p && winner &&
              p.apartamento === winner.apartamento && 
              p.bloco === winner.bloco
                ? { ...p, status: 'winner' }
                : p
            )
          );
          
          setIsAnimating(false);
        }, 500);
        return;
      }

      // Calculate how many to eliminate (half, but at least 1)
      const toEliminate = Math.max(1, Math.floor(remainingParticipants.length / 2));
      
      // Select random participants to eliminate
      const toEliminateList = [];
      const tempArray = [...remainingParticipants];
      
      for (let i = 0; i < toEliminate && tempArray.length > 1; i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        toEliminateList.push(tempArray[randomIndex]);
        tempArray.splice(randomIndex, 1);
      }
      
      // Flash all selected participants red (apartment squares only)
      setFlashingParticipants(toEliminateList);
      
      setTimeout(() => {
        // Update all selected participants to eliminated status
        setCurrentParticipants(prev => 
          prev.map(p => 
            p && toEliminateList.some(eliminated => 
              eliminated && p.apartamento === eliminated.apartamento && 
              p.bloco === eliminated.bloco
            )
              ? { ...p, status: 'eliminated' }
              : p
          )
        );
        
        // Remove from remaining participants
        remainingParticipants = remainingParticipants.filter(p => 
          !toEliminateList.some(eliminated => 
            eliminated && p.apartamento === eliminated.apartamento && 
            p.bloco === eliminated.bloco
          )
        );
        
        // Clear flash
        setFlashingParticipants([]);
        
        // Continue to next round after a short delay
        setTimeout(() => {
          eliminateInRounds();
        }, 500);
      }, 800);
    };

    // Start the elimination process
    eliminateInRounds();
  };

  const resetSorteio = () => {
    setReferralWinner(null);
    setReferralButtonDisabled(false);
    setRandomWinners([]);
    setRandomButtonClicks(0);
    
    // Reset all participants to active status
    const resetParticipants = participantes.map(p => {
      if (!p) return p;
      return {
        ...p,
        status: 'active'
      };
    });
    setCurrentParticipants(resetParticipants);
    setCurrentWinner(null);
    setFlashingParticipants([]);
    setIsAnimating(false);
  };

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-radial from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Carregando dados dos participantes...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-radial from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <div className="text-red-600 dark:text-red-400 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
              Erro ao carregar dados
            </h3>
            <p className="text-red-700 dark:text-red-300 mb-4">
              {error}
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-radial from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">

        {/* Main Content */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20 dark:border-gray-700/20">
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl text-center font-bold text-gray-900 dark:text-white mb-6">
            🎉 Sorteio dos 4 Sortudos! 🎉
          </h1>

          {/* Description */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Escolha o método de sorteio e descubra quem são os vencedores da campanha de incentivo à votação!
            </p>
          </div>

          {/* Sorteio Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
            <button
              onClick={handleReferralWinner}
              disabled={referralButtonDisabled}
              className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 ${
                referralButtonDisabled
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
              }`}
            >
              {referralButtonDisabled ? '✓ Vencedor por Indicações' : '🏆 Vencedor por Indicações'}
            </button>

            <button
              onClick={handleRandomWinner}
              disabled={randomButtonClicks >= 4 || isAnimating}
              className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 ${
                randomButtonClicks >= 4 || isAnimating
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
              }`}
            >
              {isAnimating 
                ? '🎲 Sorteando...' 
                : randomButtonClicks >= 4 
                  ? `✓ 4 Vencedores Sorteados` 
                  : `🎲 Sorteio Aleatório (${randomButtonClicks}/4)`
              }
            </button>

            <button
              onClick={resetSorteio}
              className="px-6 py-4 rounded-lg font-bold text-lg bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              🔄 Reiniciar
            </button>
          </div>


          {/* Participants Blocks */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Lista de Participantes ({participantes.length})
            </h2>
            
            {currentParticipants.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-12 text-center">
                <div className="text-gray-400 dark:text-gray-500 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Todos os participantes foram sorteados!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Clique em Reiniciar para fazer um novo sorteio.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                {/* Group participants by block */}
                {(() => {
                  // Group participants by block
                  const participantsByBlock = currentParticipants.reduce((acc, participante) => {
                    if (!participante || !participante.bloco) return acc;
                    const blockKey = participante.bloco;
                    if (!acc[blockKey]) {
                      acc[blockKey] = [];
                    }
                    acc[blockKey].push(participante);
                    return acc;
                  }, {});

                  // Get all unique blocks
                  const allBlocks = Object.keys(participantsByBlock).sort((a, b) => parseInt(a) - parseInt(b));

                  return allBlocks.map(blockKey => {
                    const blockApts = participantsByBlock[blockKey] || [];
                    
                    // Check if any apartment in this block is a winner
                    const hasWinner = blockApts.some(apt => 
                      apt && currentWinner && 
                      currentWinner.apartamento === apt.apartamento && 
                      currentWinner.bloco === apt.bloco
                    );
                    
                    // Check if any apartment in this block is flashing
                    const hasFlashing = blockApts.some(apt => 
                      apt && flashingParticipants.some(flashing => 
                        flashing && flashing.apartamento === apt.apartamento && 
                        flashing.bloco === apt.bloco
                      )
                    );

                    return (
                      <div
                        key={`block-${blockKey}`}
                        className={`relative rounded-lg shadow-md p-3 transition-all duration-300 ${
                          hasWinner 
                            ? 'border-4 border-green-400 shadow-green-200 dark:shadow-green-800 animate-pulse bg-green-50 dark:bg-green-900/20' 
                            : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 hover:shadow-lg'
                        }`}
                      >
                        {/* Block Name */}
                        <div className="text-center mb-2">
                          <span className={`text-sm font-bold uppercase tracking-wide ${
                            hasWinner
                              ? 'text-green-600 dark:text-green-400'
                              : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            Bloco {blockKey.padStart(2, '0')}
                          </span>
                        </div>
                        
                        {/* Apartments Grid */}
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-1">
                          {blockApts.map((participante) => {
                            if (!participante || !participante.apartamento || !participante.bloco) return null;
                            
                            const isWinner = currentWinner && 
                              currentWinner.apartamento === participante.apartamento && 
                              currentWinner.bloco === participante.bloco;
                            
                            const isFlashing = flashingParticipants.some(flashing => 
                              flashing && flashing.apartamento === participante.apartamento && 
                              flashing.bloco === participante.bloco
                            );
                            
                            const isEliminated = participante.status === 'eliminated';
                            const isWinnerStatus = participante.status === 'winner';

                            return (
                              <div key={`${participante.apartamento}-${participante.bloco}`} className="text-center">
                                {/* Apartment Square */}
                                <div className={`w-8 h-8 mx-auto rounded flex items-center justify-center text-xs font-bold transition-all duration-300 ease-linear ${
                                  isFlashing
                                    ? 'bg-red-500 text-white shadow-lg animate-pulse'
                                    : isWinner || isWinnerStatus
                                      ? 'bg-green-500 text-white shadow-lg animate-pulse'
                                      : isEliminated
                                        ? 'bg-gray-500 text-white shadow-md opacity-60'
                                        : 'bg-blue-500 text-white shadow-md hover:shadow-lg'
                                }`}>
                                  {participante.apartamento.padStart(3, '0')}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            )}
          </div>

          {/* Winners Display */}
          {(referralWinner || randomWinners.length > 0) && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                🏆 Vencedores! 🏆
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Referral Winner */}
                {referralWinner && (
                  <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-2 border-green-300 dark:border-green-700 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">
                      🏆 Vencedor por Indicações! 🏆
                    </h3>
                    <div className="text-lg text-green-700 dark:text-green-300">
                      <p className="font-bold">Apartamento: {referralWinner.apartamento.padStart(3, '0')}</p>
                      <p className="font-bold">Bloco: {referralWinner.bloco.padStart(2, '0')}</p>
                      <p className="font-bold">Protocolo: {referralWinner.protocolo || 'N/A'}</p>
                      <p className="text-base mt-2">Com {referralWinner.indicacoes} indicações!</p>
                    </div>
                  </div>
                )}

                {/* Random Winners */}
                {randomWinners.length > 0 && (
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-2 border-purple-300 dark:border-purple-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4 text-center">
                      🎲 Vencedores do Sorteio Aleatório! 🎲
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {randomWinners.map((winner, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-purple-200 dark:border-purple-600">
                          <h4 className="text-sm font-bold text-purple-800 dark:text-purple-200 mb-2">
                            Vencedor #{index + 1}
                          </h4>
                          <div className="text-sm text-purple-700 dark:text-purple-300">
                            <p className="font-bold">Apt: {winner.apartamento.padStart(3, '0')}</p>
                            <p className="font-bold">Bloco: {winner.bloco.padStart(2, '0')}</p>
                            <p className="font-bold">Protocolo: {winner.protocolo || 'N/A'}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Back to Participants Link */}
          <section className="mt-10">
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/20 dark:to-gray-600/20 p-6 rounded-lg border border-gray-200 dark:border-gray-600/30">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Ver Lista Completa
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Consulte a lista completa de participantes com todas as informações.
                </p>
                <Link 
                  href="/incentivo-votacao/participantes"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Ver Lista Completa
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-700 dark:text-gray-200 text-sm">
            Condomínio Dona Mirai - Sorteio dos 4 Sortudos - Incentivo à Votação
          </p>
        </div>
      </div>
    </div>
  );
}
