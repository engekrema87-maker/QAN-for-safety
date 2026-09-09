import React from 'react';
import { ShieldCheck, Award, FileCheck2, CheckCircle, Scale, ShieldAlert } from 'lucide-react';

export const CodeStandardsSection: React.FC = () => {
  const standards = [
    {
      title: 'المديرية العامة للدفاع المدني',
      desc: 'شركة معتمدة ومصنفة لتوريد وتنفيذ وصيانة شبكات الإنذار والإطفاء في مدينة الرياض.',
      badge: 'اعتماد رسمي'
    },
    {
      title: 'منصة سلامة الحكومية',
      desc: 'ربط إلكتروني مباشر لإصدار عقود الصيانة السنوية وشهادات الإنجاز وتجديد الرخص الفورية.',
      badge: 'توثيق إلكتروني'
    },
    {
      title: 'كود البناء السعودي (SBC 801)',
      desc: 'التزام تام بكافة فصول الكود السعودي للحماية من الحرائق وتصميم مسارات الهروب ومسافات الرشاشات.',
      badge: 'إلزامي بالرياض'
    },
    {
      title: 'معايير الجمعية الأمريكية NFPA',
      desc: 'تطبيق أحدث المعايير العالمية مثل NFPA 13 (رشاشات)، NFPA 72 (إنذار)، و NFPA 20 (مضخات).',
      badge: 'جودة عالمية'
    },
    {
      title: 'قوائم الاعتماد UL / FM',
      desc: 'توريد معدات ومضخات ورشاشات وصمامات مدرجة ومعتمدة من مختبرات التأمين الأمريكية والأوروبية.',
      badge: 'معدات أصلية'
    },
    {
      title: 'المواصفات السعودية (SASO)',
      desc: 'كافة أدوات السلامة وطفايات الحريق ومخارج الطوارئ خاضعة لاختبارات الجودة ومطابقة لمواصفات ساسو.',
      badge: 'مطابقة قياسية'
    }
  ];

  return (
    <section className="py-16 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161d2a] border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold mb-3">
            <Award className="w-4 h-4 text-[#d4af37]" />
            <span>المرجعية الهندسية والامتثال النظامي</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
            معايير واعتمادات تضمن قبول منشأتك لدى الدفاع المدني
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            تضمن <span className="text-[#d4af37] font-bold">QAN للسلامة</span> عدم وجود أي ملاحظات هندسية أو فنية تعيق استخراج رخصة الدفاع المدني أو تجديدها، بفضل التزامنا الدقيق بالأنظمة السعودية المعتمدة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {standards.map((std, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-[#0e131d] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-[#161d2a] text-[#d4af37] border border-slate-800">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800">
                    {std.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {std.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {std.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-850 flex items-center gap-1.5 text-[11px] text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>ضمان اعتماد كامل لملف السلامة</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
