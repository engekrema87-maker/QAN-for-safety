import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, XCircle, AlertTriangle, ArrowRight, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AuditItem {
  id: string;
  title: string;
  description: string;
  penaltyRisk: string;
  checked: boolean;
}

export const SafetyAuditChecker: React.FC = () => {
  const [items, setItems] = useState<AuditItem[]>([
    {
      id: 'contract',
      title: 'عقد صيانة دوري ساري وموثق عبر منصة سلامة الإلكترونية',
      description: 'إلزامي لتجديد رخصة بلدي والدفاع المدني وتجنب الإغلاق الفوري للمنشأة.',
      penaltyRisk: 'غرامة فورية تصل إلى ١٠,٠٠٠ ريال وإيقاف تجديد الرخصة البلدية',
      checked: true
    },
    {
      id: 'pumps',
      title: 'تشغيل واختبار مضخات الحريق (ديزل وكهرباء) مع ضغط شبكة ثابت',
      description: 'فحص دوري لمستوى ضغط الشبكة (Bar) وتشغيل تجريبي أسبوعي لمضخة الديزل.',
      penaltyRisk: 'مخالفة جسيمة من لجان التفتيش الميدانية لعدم جاهزية خط الدفاع الأول',
      checked: true
    },
    {
      id: 'alarm_panel',
      title: 'لوحة إنذار الحريق تعمل بصورة طبيعية وخالية من لمبات الأعطال (Trouble)',
      description: 'التأكد من سلامة جميع الكواشف الدخانية والشعاعية وربطها باللوحة المركزية.',
      penaltyRisk: 'إنذار بإغلاق المنشأة في حال وجود أعطال معطلة لنظام الإنذار المبكر',
      checked: false
    },
    {
      id: 'exits',
      title: 'مخارج وسلالم الطوارئ سالكة تماماً ومجهزة بإنارة طوارئ ولوحات خروج مضيئة',
      description: 'خلو الممرات من تكديس البضائع والكراتين وعمل بطاريات كشافات الطوارئ.',
      penaltyRisk: 'رصد مخالفة فورية لسلامة الأرواح وإعاقة مسارات الهروب',
      checked: true
    },
    {
      id: 'extinguishers',
      title: 'طفايات الحريق اليدوية وصناديق الخراطيم مفحوصة ومختومة بتاريخ ساري',
      description: 'معايرة مؤشر الضغط ووجود كرت الفحص الدوري المعتمد من شركة سلامة مرخصة.',
      penaltyRisk: 'مخالفة متكررة وتكليف بفحص وإعادة تعبئة فورية',
      checked: false
    }
  ]);

  const toggleCheck = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const checkedCount = items.filter((i) => i.checked).length;
  const score = Math.round((checkedCount / items.length) * 100);

  let statusConfig = {
    label: 'منشأة جاهزة ومعتمدة',
    color: 'text-emerald-400',
    bg: 'bg-emerald-950/40 border-emerald-500/30',
    description: 'منشأتك مستوفية للمعايير الأساسية ومؤهلة لاجتياز زيارات الدفاع المدني وتجديد رخصة سلامة بنجاح.'
  };

  if (score < 60) {
    statusConfig = {
      label: 'خطر مرتفع - منشأة معرضة للإغلاق والمخالفات',
      color: 'text-rose-400',
      bg: 'bg-rose-950/40 border-rose-500/30',
      description: 'يوجد نقص في متطلبات السلامة الحرجة قد يؤدي إلى غرامات وإيقاف ترخيص بلدي. ننصح بطلب فريق معاينة وتصحيح فوري من QAN للسلامة.'
    };
  } else if (score < 100) {
    statusConfig = {
      label: 'جاهزية جزئية - يلزم استكمال الملاحظات',
      color: 'text-[#d4af37]',
      bg: 'bg-[#181822] border-[#d4af37]/40',
      description: 'هناك بنود تحتاج إلى صيانة أو توثيق لتجنب الملاحظات الفنية أثناء تفتيش الدفاع المدني بالرياض.'
    };
  }

  const generateAuditReportWhatsApp = () => {
    const missing = items.filter((i) => !i.checked).map((i) => `• ${i.title}`).join('\n');
    const msg = `السلام عليكم فريق QAN للسلامة،
أجريت فحص الجاهزية لمنشأتي في الرياض وبلغت النسبة ${score}%:
البنود غير المستوفية:
${missing || 'جميع البنود مستوفية وأرغب في تجديد العقد السنوي وشهادة سلامة'}

أرجو التواصل لمعاينة الموقع وإصدار عقد الصيانة المعتمد. شكراً.`;
    return `https://wa.me/966500098117?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="readiness" className="py-16 bg-[#090d14] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161d2a] border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold mb-3">
            <ShieldAlert className="w-4 h-4 text-[#d4af37]" />
            <span>فاحص التفتيش الميداني لمنشآت الرياض - QAN للسلامة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
            فاحص جاهزية ترخيص الدفاع المدني وتجنب مخالفات منصة سلامة
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            تحقق من مدى جاهزية مستودعك أو مصنعك في الرياض لاجتياز التفتيش المفاجئ والحصول على الرخص دون تأخير.
          </p>
        </div>

        {/* Audit Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Checklist (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-bold text-slate-400 mb-2 px-1 flex items-center justify-between">
              <span>انقر على البنود المتوفرة حالياً في منشأتك:</span>
              <span className="text-[#d4af37] font-mono">({checkedCount} من {items.length} مستوفى)</span>
            </div>

            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                  item.checked
                    ? 'bg-[#111722] border-emerald-500/40 shadow-sm'
                    : 'bg-[#0d121c] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="pt-0.5 shrink-0">
                  {item.checked ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-slate-600 flex items-center justify-center" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className={`text-xs sm:text-sm font-bold ${item.checked ? 'text-white' : 'text-slate-300'}`}>
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {item.description}
                  </p>

                  {!item.checked && (
                    <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-rose-300 bg-rose-950/40 px-2.5 py-1 rounded border border-rose-900/40">
                      <AlertTriangle className="w-3 h-3 text-rose-500 shrink-0" />
                      <span>خطر: {item.penaltyRisk}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Real-time Status Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#111722] p-6 sm:p-7 rounded-xl border border-slate-800 shadow-xl space-y-6 sticky top-28">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-sm font-bold text-slate-300">مؤشر الجاهزية والامتثال:</span>
              <span className={`text-2xl font-black font-mono ${statusConfig.color}`}>
                %{score}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-[#090d14] rounded-full overflow-hidden p-0.5 border border-slate-800">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  score === 100
                    ? 'bg-emerald-500'
                    : score >= 60
                    ? 'bg-[#d4af37]'
                    : 'bg-rose-600'
                }`}
                style={{ width: `${score}%` }}
              />
            </div>

            {/* Status box */}
            <div className={`p-4 rounded-xl border ${statusConfig.bg}`}>
              <div className="flex items-center gap-2 mb-1.5">
                {score === 100 ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <AlertTriangle className={`w-5 h-5 ${statusConfig.color}`} />
                )}
                <h4 className={`text-sm font-bold ${statusConfig.color}`}>
                  {statusConfig.label}
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {statusConfig.description}
              </p>
            </div>

            {/* Guidance from QAN */}
            <div className="text-xs text-slate-400 space-y-2">
              <span className="font-bold text-white block">ماذا تقدم لك QAN للسلامة بالرياض؟</span>
              <p className="leading-relaxed text-slate-300">
                نقوم بفحص ومعالجة كافة الملاحظات الفنية خلال 24 ساعة، وإصدار عقد الصيانة المعتمد وشهادة الإنجاز على منصة سلامة فورياً لضمان تجديد رخصتك بأعلى درجات الموثوقية.
              </p>
            </div>

            {/* Direct Connect Buttons */}
            <div className="space-y-2.5 pt-2">
              <a
                href={generateAuditReportWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                id="readiness-fix-whatsapp-btn"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>إرسال تقرير الفحص لمعالجة النواقص بالواتساب</span>
              </a>

              <a
                href={COMPANY_INFO.phoneHref}
                id="readiness-call-btn"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#d4af37] hover:bg-[#c29b2c] text-slate-950 font-bold text-xs shadow-md transition-all"
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
