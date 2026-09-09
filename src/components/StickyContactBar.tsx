import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const StickyContactBar: React.FC = () => {
  return (
    <aside 
      aria-label="أزرار التواصل السريع" 
      className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-50 flex flex-col items-center gap-3"
    >
      {/* WhatsApp Floating Icon Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 15 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: [0, -4, 0] 
        }}
        transition={{
          y: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: { duration: 0.4 },
          scale: { duration: 0.4 }
        }}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.94 }}
        className="relative group"
      >
        {/* Subtle breathing ripple aura */}
        <span 
          className="absolute inset-0 rounded-full bg-emerald-500 opacity-20 group-hover:opacity-35 animate-ping pointer-events-none"
          style={{ animationDuration: '3s' }}
        />

        <a
          href={COMPANY_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="محادثة واتساب"
          title="محادثة واتساب مباشرة: 0500098117"
          className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-950/40 border border-emerald-400/40 transition-colors duration-200 cursor-pointer"
        >
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <MessageCircle className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-white" />
          </motion.div>
        </a>
      </motion.div>

      {/* Call Floating Icon Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 15 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: [0, -4, 0] 
        }}
        transition={{
          y: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6 // Staggered gentle float
          },
          opacity: { duration: 0.4, delay: 0.1 },
          scale: { duration: 0.4, delay: 0.1 }
        }}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.94 }}
        className="relative group"
      >
        {/* Subtle breathing ripple aura */}
        <span 
          className="absolute inset-0 rounded-full bg-[#d4af37] opacity-20 group-hover:opacity-35 animate-ping pointer-events-none"
          style={{ animationDuration: '3.5s', animationDelay: '1s' }}
        />

        <a
          href={COMPANY_INFO.phoneHref}
          id="floating-call-btn"
          aria-label="اتصال هاتفي مباشر"
          title="اتصال هاتفي مباشر: 0500098117"
          className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#d4af37] hover:bg-[#c29b2c] text-slate-950 flex items-center justify-center shadow-lg shadow-amber-950/30 border border-[#fceda2]/50 transition-colors duration-200 cursor-pointer"
          dir="ltr"
        >
          <motion.div
            whileHover={{ rotate: [0, 12, -12, 6, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Phone className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-slate-950" />
          </motion.div>
        </a>
      </motion.div>
    </aside>
  );
};

