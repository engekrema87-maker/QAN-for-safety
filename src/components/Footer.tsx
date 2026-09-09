import React from 'react';
import { Shield, Phone, MessageSquare, MapPin, CheckCircle, Flame, Mail, Clock, Sparkles } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { QanLogo } from './QanLogo';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-[#d4af37]/25 text-slate-400 text-xs">
      
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand & Territory */}
          <div className="space-y-4">
            <QanLogo size="md" />

            <p className="text-xs text-slate-300 leading-relaxed">
              شركة هندسية متخصصة ومعتمدة في توريد، تركيب، واختبار وصيانة كافة أنظمة الدفاع المدني ومكافحة الحرائق للمستودعات والمصانع والمباني.
            </p>

            <div className="p-3.5 rounded-xl bg-[#101016] border border-[#d4af37]/25 text-[11px] text-[#fceda2] space-y-1 shadow-md">
              <span className="font-bold flex items-center gap-1 text-[#d4af37]">
                <MapPin className="w-3.5 h-3.5" />
                تنبيه النطاق الجغرافي:
              </span>
              <span>نقدم خدماتنا حصرياً وتاماً داخل مدينة الرياض والمناطق الصناعية التابعة لها فقط.</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#d4af37]" />
              خدمات الدفاع المدني بالرياض
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#fceda2] transition-colors cursor-pointer text-right">
                  شبكات الرش الآلي ورشاشات ESFR
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#fceda2] transition-colors cursor-pointer text-right">
                  لوحات الإنذار المعنونة والكواشف الشعاعية
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#fceda2] transition-colors cursor-pointer text-right">
                  أنظمة الغاز النظيف FM-200 و Novec
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#fceda2] transition-colors cursor-pointer text-right">
                  مضخات الحريق المعتمدة UL / FM
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#fceda2] transition-colors cursor-pointer text-right">
                  عقود صيانة معتمدة بمنصة سلامة
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#fceda2] transition-colors cursor-pointer text-right">
                  اعتماد مخططات كود البناء SBC 801
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Industrial Coverage in Riyadh */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              مراكز التغطية السريعة بالرياض
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>المدينة الصناعية الثانية والثالثة بالرياض</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>منطقة السلي والمستودعات المركزية</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>المشاعل ومستودعات طريق الخرج</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>حي الرمال ومخازن شرق العاصمة</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>شمال الرياض وطريق الملك فهد والعليا</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>الصناعية القديمة ووسط وغرب الرياض</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Rapid Dial */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#d4af37]" />
              الاتصال والدعم الفني بالرياض
            </h4>

            <div className="space-y-2">
              <span className="text-[11px] text-slate-400 block">رقم الاتصال المباشر والواتساب الموحد:</span>
              <a
                href={COMPANY_INFO.phoneHref}
                className="text-xl font-mono font-black text-[#fceda2] hover:text-white transition-colors block"
                dir="ltr"
              >
                0500098117
              </a>
              <span className="text-xs text-slate-300 font-sans block">
                (٠٥٠٠٠٩٨١١٧)
              </span>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <a
                href={COMPANY_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>محادثة واتساب مباشرة</span>
              </a>

              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#d4af37] hover:bg-[#c29b2c] text-slate-950 font-bold text-xs shadow-md transition-all"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-slate-950" />
                <span>0500098117 اتصال فوري</span>
              </a>
            </div>

            <div className="text-[11px] text-slate-400 pt-1 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>فرق طوارئ على مدار الساعة في الرياض</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-[#d4af37]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} QAN للسلامة (QUALIFIED ALLIANCE NETWORK) - أنظمة الدفاع المدني ومكافحة الحرائق بالرياض.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>معتمدون بمنصة سلامة</span>
            <span>•</span>
            <span>كود البناء السعودي SBC 801</span>
            <span>•</span>
            <span>الرياض فقط</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
