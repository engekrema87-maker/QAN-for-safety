import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, ShieldCheck, CheckCircle, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { QanLogo } from './QanLogo';

interface HeaderProps {
  onOpenRequirements: () => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRequirements, onOpenBooking }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c1017]/95 backdrop-blur-md border-b border-slate-800 shadow-md">
      {/* Top Notification & Emergency Bar */}
      <div className="bg-[#090d14] border-b border-slate-800/80 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-slate-300">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[#d4af37] font-semibold px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700">
              <MapPin className="w-3 h-3 text-[#d4af37]" />
              تغطية حصرية بالرياض:
            </span>
            <span className="text-slate-300 font-medium">QAN للسلامة - توريد وصيانة أنظمة الدفاع المدني ومكافحة الحرائق</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              معتمدون في منصة سلامة وكود البناء SBC 801
            </span>
            <a 
              href={COMPANY_INFO.phoneHref} 
              id="top-bar-phone-link"
              className="inline-flex items-center gap-1.5 text-white font-bold hover:text-[#d4af37] transition-colors font-mono"
              dir="ltr"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" />
              0500098117
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo with Placeholder holder */}
          <div className="flex items-center gap-3">
            <a href="#" className="group flex items-center">
              <QanLogo size="sm" className="flex sm:hidden" />
              <QanLogo size="md" className="hidden sm:flex" />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer">
              خدماتنا
            </button>
            <button onClick={() => scrollToSection('facilities')} className="hover:text-white transition-colors cursor-pointer">
              المستودعات والمصانع
            </button>
            <button onClick={() => scrollToSection('requirements')} className="text-[#d4af37] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer font-bold">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              معرفة المتطلبات (رحلة المستثمر)
            </button>
            <button onClick={() => scrollToSection('readiness')} className="hover:text-white transition-colors cursor-pointer">
              فاحص منصة سلامة
            </button>
            <button onClick={() => scrollToSection('coverage')} className="hover:text-white transition-colors cursor-pointer">
              مناطق الرياض
            </button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors cursor-pointer">
              الأسئلة الشائعة
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-cta"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white transition-colors text-xs font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5 text-white" />
              <span>واتساب فوري</span>
            </a>

            <a
              href={COMPANY_INFO.phoneHref}
              id="header-call-cta"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d4af37] hover:bg-[#c29b2c] text-slate-950 font-bold text-xs shadow-sm transition-colors"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-slate-950" />
              <span>0500098117</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={COMPANY_INFO.phoneHref}
              className="p-2 rounded-lg bg-[#d4af37] text-slate-950 flex items-center justify-center sm:hidden font-bold"
              aria-label="اتصال فوري"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg bg-[#141924] border border-slate-700 text-slate-300 hover:text-white"
              aria-label="القائمة"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1017] border-b border-slate-800 px-4 py-5 shadow-xl">
          <div className="flex flex-col gap-2 text-sm font-medium text-slate-200 mb-5">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              خدمات إطفاء وإنذار الحريق
            </button>
            <button 
              onClick={() => scrollToSection('facilities')} 
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              المستودعات والمصانع والمباني
            </button>
            <button 
              onClick={() => scrollToSection('requirements')} 
              className="text-right py-2.5 px-3 rounded-lg bg-slate-800/80 border border-slate-700 text-[#d4af37] flex items-center justify-between font-bold"
            >
              <span>معرفة المتطلبات (رحلة المستثمر)</span>
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            </button>
            <button 
              onClick={() => scrollToSection('readiness')} 
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              فاحص جاهزية ترخيص منصة سلامة
            </button>
            <button 
              onClick={() => scrollToSection('coverage')} 
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              مناطق التغطية في الرياض
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              الأسئلة الشائعة للدفاع المدني
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
            <a
              href={COMPANY_INFO.phoneHref}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#d4af37] text-slate-950 font-bold text-xs shadow-sm"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5" />
              0500098117
            </a>
            <a
              href={COMPANY_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-700 text-white font-bold text-xs shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              محادثة واتساب
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
