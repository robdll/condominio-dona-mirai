import Link from 'next/link';

export default function LinkCard({ linkCard }) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 dark:border-gray-700/20 text-center hover:shadow-2xl transition-all duration-300">
      <div className={`w-16 h-16 ${linkCard.iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <svg className={`w-8 h-8 ${linkCard.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={linkCard.iconPath} />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{linkCard.title}</h3>
      <p className="text-gray-700 dark:text-gray-200 mb-4">{linkCard.description}</p>
      <Link 
        href={linkCard.link} 
        className={`${linkCard.linkColor} hover:${linkCard.linkHoverColor} font-medium`}
      >
        {linkCard.linkText} →
      </Link>
    </div>
  );
}
