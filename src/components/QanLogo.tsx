import React from 'react';
import { Shield, Image as ImageIcon } from 'lucide-react';

interface QanLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
  showArabic?: boolean;
  customLogoSrc?: string; // Optional: Provide your logo image path here (e.g. '/my-logo.png')
  className?: string;
}

/**
 * مكون الشعار الرسمي - QAN للسلامة
 * تم تصميمه بأسلوب مؤسسي هندسي رصين وواضح، مع هولدر مخصص لإدراج الشعار في أي وقت.
 */
export const QanLogo: React.FC<QanLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  showArabic = true,
  customLogoSrc,
  className = ''
}) => {
  const sizeMap = {
    sm: {
      box: 'w-10 h-10',
      title: 'text-lg',
      sub: 'text-[9px] tracking-wider',
      ar: 'text-[10px]'
    },
    md: {
      box: 'w-12 h-12 sm:w-14 sm:h-14',
      title: 'text-xl sm:text-2xl',
      sub: 'text-[10px] tracking-[0.15em]',
      ar: 'text-xs'
    },
    lg: {
      box: 'w-16 h-16',
      title: 'text-2xl sm:text-3xl',
      sub: 'text-xs tracking-[0.2em]',
      ar: 'text-xs sm:text-sm'
    },
    hero: {
      box: 'w-20 h-20 sm:w-24 sm:h-24',
      title: 'text-3xl sm:text-4xl',
      sub: 'text-xs sm:text-sm tracking-[0.25em]',
      ar: 'text-sm sm:text-base'
    }
  };

  const current = sizeMap[size];

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* 
        [هولدر الشعار المؤسسي] 
        تصميم هندسي متقن بإطار ذهبي رصين - يمكنك استبداله بصورتك عبر customLogoSrc
      */}
      <div 
        title="هولدر الشعار (يمكنك استبداله بصورة شعارك)"
        className={`relative ${current.box} shrink-0 rounded-xl bg-[#12141a] border border-[#d4af37]/60 shadow-md flex items-center justify-center overflow-hidden group`}
      >
        {customLogoSrc ? (
          <img
            src={customLogoSrc}
            alt="QAN للسلامة"
            className="w-full h-full object-contain p-1"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37] mb-0.5" />
            <span className="text-[8px] font-bold text-slate-300 leading-none">
              هولدر الشعار
            </span>
          </div>
        )}
      </div>

      {/* الهوية النصية المؤسسية: QAN للسلامة */}
      <div className="flex flex-col text-right">
        <div className="flex items-center gap-2">
          <span className={`font-black tracking-tight text-white ${current.title}`}>
            QAN <span className="text-[#d4af37]">للسلامة</span>
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700 font-bold whitespace-nowrap">
            الرياض
          </span>
        </div>

        {showSubtitle && (
          <span className={`text-[#d4af37] font-sans font-semibold uppercase ${current.sub}`}>
            QUALIFIED ALLIANCE NETWORK
          </span>
        )}

        {showArabic && (
          <span className={`text-slate-400 font-medium ${current.ar} mt-0.5`}>
            أنظمة الدفاع المدني ومكافحة الحرائق بالرياض
          </span>
        )}
      </div>
    </div>
  );
};
