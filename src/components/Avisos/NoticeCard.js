import { avisoCategories } from './avisos.constant.js';
import { formatDate } from '../../lib/utils';

export default function NoticeCard({ aviso, onReadMore }) {
  const category = avisoCategories.find(cat => cat.name === aviso.category);

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300">
      {/* Header with category and date */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {category && (
            <span className={`text-xs px-2 py-1 rounded-full ${category.color}`}>
              {category.name}
            </span>
          )}
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
          {formatDate(aviso.date)}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
        {aviso.title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed line-clamp-4 mb-4">
        {aviso.description}
      </p>

      {/* Read More Button */}
      <button 
        onClick={() => onReadMore && onReadMore(aviso)}
        className="w-full px-4 py-2 bg-brandBtn hover:bg-brandBtnHover text-white rounded-lg transition-all duration-200 font-medium cursor-pointer"
      >
        Ler Mais
      </button>
    </div>
  );
}
