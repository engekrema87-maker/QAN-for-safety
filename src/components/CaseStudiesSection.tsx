import React from 'react';
import { Award, MapPin, CheckCircle, ArrowLeft } from 'lucide-react';
import { CASE_STUDIES } from '../data/companyData';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161d2a] border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold mb-3">
            <Award className="w-4 h-4 text-[#d4af37]" />
            <span>سجل أعمال موثق في العاصمة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
            نماذج من مشاريع تم تأمينها وترخيصها بنجاح في الرياض
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            فخورون بثقة كبرى المنشآت والمستودعات في الرياض لتأمين مواقعهم وتجاوز تدقيق الدفاع المدني والحصول على رخص سلامة نظامية مع <span className="text-[#d4af37] font-bold">QAN للسلامة</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#111722] p-6 rounded-xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#182030] text-[#d4af37] border border-[#d4af37]/30">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-300">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug">
                  {item.title}
                </h3>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-[#0c1017] border border-slate-800">
                    <span className="text-rose-400 font-bold block mb-1">الملاحظات والتحدي الهندسي:</span>
                    <p className="text-slate-400 leading-relaxed">{item.challenge}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0c1017] border border-slate-800">
                    <span className="text-emerald-400 font-bold block mb-1">الحل المنفذ والاعتماد:</span>
                    <p className="text-slate-300 leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  رخصة سارية بدون ملاحظات
                </span>
                <span className="font-mono text-[#d4af37]">منصة سلامة ✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
