import React, { useState } from 'react';
import { MapPin, Clock, ShieldCheck, CheckCircle, Navigation, MessageSquare, Phone } from 'lucide-react';
import { RIYADH_ZONES, COMPANY_INFO } from '../data/companyData';

export const RiyadhCoverageMap: React.FC = () => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>(RIYADH_ZONES[0].id);

  const selectedZone = RIYADH_ZONES.find((z) => z.id === selectedZoneId) || RIYADH_ZONES[0];

  return (
    <section id="coverage" className="py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161d2a] border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold mb-3">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span>نطاق الخدمة الجغرافي المعتمد</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
            تغطية هندسية سريعة لكافة مناطق وأحياء مدينة الرياض
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            تتواجد فرق <span className="text-[#d4af37] font-bold">QAN للسلامة</span> الهندسية وسيارات الصيانة المتنقلة بالقرب من كبرى التجمعات اللوجستية والصناعية في الرياض لضمان التدخل الفوري وتلبية متطلبات الدفاع المدني دون أي تأخير.
          </p>
        </div>

        {/* Coverage Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* List of Zones (6 cols) */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-bold text-slate-400 block px-1">
              اختر المنطقة للاطلاع على وقت الاستجابة الميدانية والتفاصيل:
            </span>

            {RIYADH_ZONES.map((zone) => {
              const isSelected = selectedZoneId === zone.id;
              return (
                <div
                  key={zone.id}
                  onClick={() => setSelectedZoneId(zone.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#151c28] border-[#d4af37] shadow-md ring-1 ring-[#d4af37]'
                      : 'bg-[#111722] border-slate-800 hover:bg-[#131a26] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#d4af37] text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                      <Navigation className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {zone.name}
                      </h4>
                      <span className="text-[11px] text-slate-400">
                        تصنيف النطاق: {zone.zoneType}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-900/40">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{zone.responseTime}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Zone Card / Dispatch Hub (6 cols) */}
          <div className="lg:col-span-6 bg-[#111722] p-6 sm:p-8 rounded-xl border border-slate-800 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs text-[#d4af37] font-bold block">مركز الدعم الهندسي الميداني بالرياض</span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {selectedZone.name}
                </h3>
              </div>
              <span className="text-xs px-3 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700 font-semibold">
                {selectedZone.zoneType}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedZone.description}
            </p>

            {/* Quick Dispatch Highlights */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 block">المواقع الأكثر خدمة في هذا النطاق:</span>
              <div className="flex flex-wrap gap-2">
                {selectedZone.popularLocations.map((loc, i) => (
                  <span key={i} className="text-xs bg-[#0b0f17] text-slate-200 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Response Time Guarantee Box */}
            <div className="p-4 rounded-xl bg-[#0b0f17] border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">وقت وصول فرق المعاينة والطوارئ:</span>
                  <span className="text-sm font-bold text-white font-mono">{selectedZone.responseTime}</span>
                </div>
              </div>
              <span className="text-[11px] text-emerald-400 font-bold">استجابة سريعة</span>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`https://wa.me/966500098117?text=${encodeURIComponent(`السلام عليكم، أحتاج مهندس سلامة من QAN للسلامة لمعاينة منشأتنا الواقعة في: (${selectedZone.name}) بالرياض.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>طلب معاينة لهذا النطاق</span>
              </a>

              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all"
                dir="ltr"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>0500098117</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
