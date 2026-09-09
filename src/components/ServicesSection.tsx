import React, { useState } from 'react';
import { Flame, BellRing, ShieldAlert, Gauge, FileCheck2, Compass, CheckCircle, ChevronDown, ChevronUp, ArrowLeft, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/companyData';

export const ServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  // Map icon names to Lucide components with gold metallic theme
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-6 h-6 text-[#d4af37]" />;
      case 'BellRing': return <BellRing className="w-6 h-6 text-amber-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-[#fceda2]" />;
      case 'Gauge': return <Gauge className="w-6 h-6 text-emerald-400" />;
      case 'FileCheck2': return <FileCheck2 className="w-6 h-6 text-amber-300" />;
      case 'Compass': return <Compass className="w-6 h-6 text-yellow-500" />;
      default: return <Flame className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-16 bg-[#08080a] border-b border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161d2a] border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold mb-3">
            <ShieldAlert className="w-4 h-4 text-[#d4af37]" />
            <span>خدمات هندسية متكاملة داخل الرياض - QAN للسلامة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
            أنظمة الدفاع المدني ومكافحة الحرائق المعتمدة في الرياض
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            تقدم <span className="text-[#d4af37] font-bold">QAN للسلامة</span> حلولاً هندسية وتوريدات مطابقة للمواصفات القياسية السعودية (SASO) والجمعية الأمريكية للحماية من الحرائق (NFPA) وكود SBC 801.
          </p>
        </div>

        {/* Services Grid Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {SERVICES.map((service) => {
            const isSelected = activeServiceId === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#121218] border-[#d4af37] shadow-xl shadow-amber-950/40 ring-1 ring-[#d4af37]/50'
                    : 'bg-[#0e0e12]/60 border-slate-800 hover:border-[#d4af37]/30 hover:bg-[#121218]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-[#08080a] border border-[#d4af37]/25">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-mono text-slate-300 bg-[#08080a] px-2 py-0.5 rounded border border-[#d4af37]/20">
                      {service.civilDefenseCode}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className={`font-semibold ${isSelected ? 'text-[#fceda2]' : 'text-slate-400'}`}>
                    {isSelected ? 'المواصفات معروضة أدناه' : 'عرض المواصفات الفنية'}
                  </span>
                  <ArrowLeft className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-[#d4af37]' : 'text-slate-500'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Active Service Detail Card */}
        <div className="bg-gradient-to-br from-[#121218] via-[#09090b] to-[#121218] p-6 sm:p-8 rounded-2xl border border-[#d4af37]/35 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded bg-[#d4af37]/20 text-[#fceda2] font-bold border border-[#d4af37]/40">
                  كود الاعتماد: {activeService.civilDefenseCode}
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 font-medium border border-emerald-500/30">
                  شهادات معتمدة بمنصة سلامة
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {activeService.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeService.description}
              </p>

              {/* Key Features Bullet Points */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-400 block">المزايا الهندسية والمواصفات المعتمدة بالرياض:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  {activeService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-[#08080a] p-2.5 rounded-lg border border-slate-800">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target facilities for this service */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2 text-xs">
                <span className="text-slate-400">مثالي لـ:</span>
                {activeService.suitableFor.map((item, idx) => (
                  <span key={idx} className="bg-[#181822] text-slate-300 px-2.5 py-0.5 rounded border border-[#d4af37]/20">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Side CTA */}
            <div className="lg:col-span-4 bg-[#0d121c] p-6 rounded-xl border border-slate-800 text-center space-y-4 shadow-xl">
              <span className="text-xs text-[#d4af37] font-bold block">طلب معاينة وتسعير فوري</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                مهندسو <span className="text-[#d4af37] font-bold">QAN للسلامة</span> الميدانيون في الرياض جاهزون لمعاينة منشأتك ورفع المخططات خلال 24 ساعة.
              </p>

              <a
                href={`https://wa.me/966500098117?text=${encodeURIComponent(`السلام عليكم، أود طلب عرض سعر ومعاينة هندسية من QAN للسلامة لخدمة: (${activeService.title}) لموقعي في الرياض.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>طلب تسعيرة عبر الواتساب</span>
              </a>

              <a
                href={COMPANY_INFO.phoneHref}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#d4af37] hover:bg-[#c29b2c] text-slate-950 font-bold text-xs shadow-md transition-all"
                dir="ltr"
              >
                <Phone className="w-3.5 h-3.5 text-slate-950" />
                <span>0500098117</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
