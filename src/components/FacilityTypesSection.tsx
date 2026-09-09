import React from 'react';
import { Warehouse, Factory, Building2, CheckCircle2, ShieldAlert, ArrowLeft, MessageSquare, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FacilityTypesSection: React.FC = () => {
  const facilities = [
    {
      id: 'warehouses',
      icon: Warehouse,
      title: 'المستودعات ومراكز الخدمات اللوجستية',
      locationContext: 'السلي، المشاعل، طريق الخرج، وحي الرمال بالرياض',
      badge: 'القطاع الأكثر طلباً بالرياض',
      badgeColor: 'bg-[#d4af37]/20 text-[#fceda2] border-[#d4af37]/40',
      description: 'نقدم حلولاً هندسية متخصصة لهناجر ومستودعات التخزين العملاقة لضمان الامتثال الصارم لاشتراطات الدفاع المدني وكود SBC 801 وحماية البضائع بمليارات الريالات.',
      systems: [
        'رشاشات مياه سريعة الاستجابة ESFR للأسقف المرتفعة حتى 12 متراً دون الحاجة لرشاشات داخل الأرفف',
        'كواشف دخان شعاعية ضوئية (Beam Detectors) تغطي مساحات شاسعة وتتحمل درجات حرارة الصيف',
        'مجموعات مضخات حريق ديزل وكهرباء UL/FM مع خزانات مياه حريق بسعات تبدأ من 50,000 لتر',
        'إصدار عقود صيانة منصة سلامة الفورية لتجديد رخص بلدي دون أي تأخير'
      ]
    },
    {
      id: 'factories',
      icon: Factory,
      title: 'المصانع والمنشآت وخطوط الإنتاج',
      locationContext: 'المدينة الصناعية الثانية والثالثة بالرياض والمشاعل',
      badge: 'أنظمة عالية الخطورة (Extra Hazard)',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      description: 'تأمين المصانع البلاستيكية، الكيميائية، الغذائية والمعدنية ضد مخاطر الاشتعال والانفجار وفق معايير الهيئة السعودية للمدن الصناعية (مدن) والدفاع المدني.',
      systems: [
        'أنظمة إطفاء بالرغوة (Deluge Foam Systems) لحماية خزانات السوائل القابلة للاشتعال والمذيبات',
        'أنظمة غاز FM-200 وغاز ثاني أكسيد الكربون لحماية لوحات الكهرباء الرئيسية وغرف المحولات',
        'كواشف لهب وغازات سامة مع سارينات إخلاء صوتية قوية تتغلب على ضوضاء الماكينات',
        'شبكات عساكر حريق خارجية (Fire Hydrants) وصناديق إطفاء بضغط مياه مستمر'
      ]
    },
    {
      id: 'buildings',
      icon: Building2,
      title: 'المباني التجارية والإدارية والأبراج',
      locationContext: 'طريق الملك فهد، العليا، شمال ووسط مدينة الرياض',
      badge: 'سلامة الأرواح وتراخيص بلدي',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      description: 'تأمين المقرات الرئيسية للشركات، المجمعات التجارية، المراكز الطبية، والفنادق بأنظمة إنذار ذكية ومخارج طوارئ تضمن الإخلاء الآمن والسلامة التامة.',
      systems: [
        'لوحات إنذار حريق معنونة تحدد موقع الدخان بدقة رقم الطابق ورقم الغرفة بالاسم',
        'شبكات كبائن إطفاء رطبة وجافة (Standpipe Systems) مع صمامات خفض الضغط المعتمدة',
        'إضاءات وسلالم طوارئ مجهزة بأبواب مقاومة للحريق ومعزولة ضد تسرب الدخان',
        'عقود إشراف وفحص دوري ربع سنوي معتمد على منصة سلامة الرسمية'
      ]
    }
  ];

  return (
    <section id="facilities" className="py-16 bg-[#0a0a0d] border-b border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161d2a] border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold mb-3">
            <Building2 className="w-4 h-4 text-[#d4af37]" />
            <span>تخصص هندسي معتمد بالرياض - QAN للسلامة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
            حلول مخصصة للمستودعات والمصانع والمباني في الرياض
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            تختلف متطلبات كود البناء السعودي SBC 801 بحسب طبيعة النشاط وحجم المنشأة. في <span className="text-[#d4af37] font-bold">QAN للسلامة</span>، صممنا حلولاً مدروسة لتلبي بدقة كافة اشتراطات الدفاع المدني لكل قطاع.
          </p>
        </div>

        {/* 3 Columns for 3 Types */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {facilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <div
                key={fac.id}
                className="bg-[#101016] p-6 sm:p-7 rounded-2xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all flex flex-col justify-between shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#08080a] border border-[#d4af37]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${fac.badgeColor}`}>
                      {fac.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {fac.title}
                  </h3>

                  <span className="text-xs text-[#d4af37] font-medium block mb-3">
                    📍 التغطية: {fac.locationContext}
                  </span>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {fac.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-800">
                    <span className="text-xs font-bold text-slate-400 block mb-2">
                      أبرز الأنظمة المنفذة طبقاً لكود SBC 801:
                    </span>
                    {fac.systems.map((sys, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{sys}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <a
                    href={`https://wa.me/966500098117?text=${encodeURIComponent(`السلام عليكم، أود الاستفسار عن أنظمة الدفاع المدني وعقود السلامة الخاصة بـ (${fac.title}) في الرياض.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0a0a0d] hover:bg-[#d4af37]/15 text-slate-200 hover:text-[#fceda2] border border-slate-800 hover:border-[#d4af37]/60 text-xs font-bold transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>طلب استشارة وعرض سعر لهذا القطاع</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
