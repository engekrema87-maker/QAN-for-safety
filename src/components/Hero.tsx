import React from 'react';
import { Shield, ShieldCheck, Phone, MessageSquare, CheckCircle, ArrowLeft, Building2, Warehouse, Factory, Award, Image as ImageIcon } from 'lucide-react';
import { COMPANY_INFO, TRUST_METRICS } from '../data/companyData';

interface HeroProps {
  onScrollToRequirements: () => void;
  onScrollToBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToRequirements, onScrollToBooking }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-12 lg:pb-20 border-b border-slate-800/80 bg-[#0c1017]">
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Institutional Header & Accreditation Bar */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          
          {/* Official Accreditation Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#161c28] border border-slate-700/80 text-slate-200 text-xs font-medium">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>معتمدون في منصة سلامة والدفاع المدني السعودي</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#161c28] border border-slate-700/80 text-amber-300 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>نطاق الخدمة: حصرياً داخل مدينة الرياض</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#161c28] border border-slate-700/80 text-slate-300 text-xs font-medium">
              <Award className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
              <span>مطابق لكود البناء السعودي (SBC 801)</span>
            </div>
          </div>

          {/* Corporate Brand Identity Frame with Dedicated Logo Placeholder */}
          <div className="flex flex-col items-center mb-6">
            <div 
              title="هولدر الشعار (يمكنك استبداله بصورة شعارك)"
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#131924] border-2 border-[#d4af37]/60 shadow-lg flex flex-col items-center justify-center p-2 mb-3 cursor-pointer hover:border-[#d4af37] transition-colors"
            >
              <Shield className="w-8 h-8 sm:w-9 sm:h-9 text-[#d4af37] mb-1" />
              <span className="text-[9px] font-bold text-slate-300 leading-none">
                هولدر الشعار
              </span>
            </div>

            <span className="text-2xl sm:text-4xl font-black tracking-tight text-white mb-1">
              QAN <span className="text-[#d4af37]">للسلامة</span>
            </span>
            <span className="text-xs sm:text-sm font-sans font-semibold tracking-wider text-slate-400 uppercase">
              QUALIFIED ALLIANCE NETWORK
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight sm:leading-snug mb-5 tracking-tight">
            مقاولات أنظمة الدفاع المدني ومكافحة الحرائق{' '}
            <span className="text-[#d4af37]">
              للمستودعات، المصانع، والمباني في الرياض
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
            توريد، تركيب، واختبار وصيانة شبكات الرش الآلي، مضخات الحريق المعتمدة <span className="text-white font-semibold">UL/FM</span>، وأنظمة الإنذار المعنونة. إصدار فوري لعقود الصيانة الدورية وشهادات الإنجاز الموثقة عبر <span className="text-emerald-400 font-semibold">منصة سلامة</span> برخص فورية معتمدة.
          </p>

          {/* Quick Target Facilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto gap-3 mb-8 text-right">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#131926] border border-slate-800">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                <Warehouse className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-bold text-white">المستودعات اللوجستية</span>
                <span className="text-xs text-slate-400">السلي، المشاعل، وطريق الخرج</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#131926] border border-slate-800">
              <div className="p-2 rounded-lg bg-red-500/10 text-red-400 shrink-0">
                <Factory className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-bold text-white">المصانع والورش</span>
                <span className="text-xs text-slate-400">الصناعية الثانية والورش الكبرى</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#131926] border border-slate-800">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-bold text-white">المباني والمجمعات</span>
                <span className="text-xs text-slate-400">المباني الإدارية والمعارض التجارية</span>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
            <a
              href={COMPANY_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>محادثة واتساب فورية ({COMPANY_INFO.phoneDisplay})</span>
            </a>

            <a
              href={COMPANY_INFO.phoneHref}
              id="hero-call-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#d4af37] hover:bg-[#c29b2c] text-slate-950 font-bold text-sm shadow-md transition-colors"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-slate-950" />
              <span>0500098117 (اتصال مباشر)</span>
            </a>

            <button
              onClick={onScrollToRequirements}
              id="hero-requirements-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#161d2a] hover:bg-[#1f2838] text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>استعلام متطلبات النشاط (رحلة المستثمر)</span>
              <ArrowLeft className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Engineering Guarantee Notice */}
          <div className="inline-flex items-center gap-2 text-xs text-slate-300 bg-[#121824] px-4 py-2.5 rounded-lg border border-slate-800">
            <Award className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>معاينة هندسية ميدانية مجانية في أي موقع داخل الرياض لتقييم كود البناء وملاحظات لجان التفتيش</span>
          </div>
        </div>

        {/* Key Corporate Metrics */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST_METRICS.map((metric, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center p-4 rounded-xl bg-[#111722] border border-slate-800/90"
            >
              <span className="text-2xl sm:text-3xl font-black text-white mb-0.5 font-mono">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#d4af37] mb-1">
                {metric.label}
              </span>
              <span className="text-[11px] text-slate-400">
                {metric.subtext}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
