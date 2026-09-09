import React, { useState } from 'react';
import { ShieldCheck, Send, CheckCircle2, Phone, MessageSquare, Clock, MapPin, Building, Warehouse, Factory } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const InspectionBookingForm: React.FC = () => {
  const [facilityName, setFacilityName] = useState('');
  const [facilityType, setFacilityType] = useState('مستودع تخزين');
  const [district, setDistrict] = useState('السلي - مستودعات التخزين');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('عقد صيانة وتجديد رخصة منصة سلامة');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setIsSubmitted(true);
  };

  const formattedWhatsAppMsg = () => {
    const text = `طلب معاينة هندسية ميدانية - QAN للسلامة (الرياض):
- المنشأة: ${facilityName || 'منشأة تجارية/صناعية'}
- النوع: ${facilityType}
- الحي/المنطقة بالرياض: ${district}
- المساحة التقريبية: ${area ? `${area} م²` : 'غير محددة بدقة'}
- الخدمة المطلوبة: ${serviceNeeded}
- رقم التواصل: ${phone}
- ملاحظات إضافية: ${notes || 'لا يوجد'}

يرجى تأكيد موعد زيارة مهندس QAN للسلامة الميداني. شكراً لكم.`;
    return `https://wa.me/966500098117?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="booking" className="py-16 bg-[#0b0f17] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Text and Assurances (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161d2a] border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>معاينة هندسية ميدانية بالرياض - QAN للسلامة</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              احجز موعد معاينة موقعك في الرياض مع مهندسي <span className="text-[#d4af37]">QAN للسلامة</span> المعتمدين
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              سواء كنت تؤسس منشأة جديدة، أو بحاجة لتجديد فوري لعقد الصيانة على منصة سلامة، أو ترغب في تصحيح ملاحظات مفتشي الدفاع المدني، نصل إليك في موقعك بالرياض خلال أقل من 24 ساعة.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-[#131926] p-3.5 rounded-xl border border-slate-800">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">زيارة ومعاينة سريعة</h4>
                  <p className="text-[11px] text-slate-400">تغطية لكافة مناطق الرياض (الصناعية الثانية، السلي، المشاعل، الشمال والشرق).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#131926] p-3.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">تقرير فني معتمد</h4>
                  <p className="text-[11px] text-slate-400">فحص شبكة الإطفاء، مضخات الحريق، لوحة الإنذار، وتحديد متطلبات كود SBC 801.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#131926] p-3.5 rounded-xl border border-slate-800">
                <Phone className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">للتواصل المباشر الفوري</h4>
                  <a href={COMPANY_INFO.phoneHref} className="text-xs text-[#d4af37] font-mono font-bold hover:underline" dir="ltr">
                    0500098117 (اتصال وواتساب)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right / Interactive Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#111722] p-6 sm:p-8 rounded-xl border border-slate-800 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-white">
                  تم استلام طلب المعاينة بنجاح!
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  شكراً لتواصلك مع <span className="text-[#d4af37] font-bold">QAN للسلامة</span>. سيقوم أحد مهندسي السلامة المعتمدين في الرياض بالتواصل معك هاتفياً على الرقم <span className="text-[#d4af37] font-mono font-bold" dir="ltr">{phone}</span> لتأكيد موعد الزيارة الميدانية.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={formattedWhatsAppMsg()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>تأكيد الموعد فوراً عبر الواتساب</span>
                  </a>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
                  >
                    تقديم طلب لمنشأة أخرى
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-3 mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    نموذج حجز المعاينة وعرض السعر المعتمد بالرياض
                  </h3>
                  <p className="text-xs text-slate-400">
                    أدخل بيانات المنشأة وسنتواصل معك خلال 30 دقيقة
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      اسم المنشأة أو الشركة:
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: مستودعات الوفاق اللوجستية"
                      value={facilityName}
                      onChange={(e) => setFacilityName(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      نوع المنشأة:
                    </label>
                    <select
                      value={facilityType}
                      onChange={(e) => setFacilityType(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
                    >
                      <option value="مستودع تخزين">مستودع تخزين / هنجر لوجستي</option>
                      <option value="مصنع أو ورشة">مصنع أو خط إنتاج أو ورشة</option>
                      <option value="مبنى تجاري أو مكاتب">مبنى تجاري / مكاتب شركات</option>
                      <option value="مجمع سكني أو فندقي">مجمع سكني / برج فندقي</option>
                      <option value="منشأة طبية أو تعليمية">مجمع طبي أو مدرسة / تعليمي</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      موقع المنشأة في الرياض:
                    </label>
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
                    >
                      <option value="السلي - مستودعات التخزين">السلي - مستودعات التخزين</option>
                      <option value="المدينة الصناعية الثانية بالرياض">المدينة الصناعية الثانية</option>
                      <option value="المشاعل وطريق الخرج">المشاعل وطريق الخرج</option>
                      <option value="المدينة الصناعية الثالثة">المدينة الصناعية الثالثة</option>
                      <option value="حي الرمال وشرق الرياض">حي الرمال وشرق الرياض</option>
                      <option value="شمال الرياض (الملقا / الياسمين)">شمال الرياض</option>
                      <option value="وسط وغرب الرياض (الصناعية القديمة)">وسط وغرب الرياض</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      المساحة التقريبية (م²):
                    </label>
                    <input
                      type="number"
                      placeholder="مثال: 2500"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      رقم الجوال للتواصل <span className="text-rose-500">*</span>:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="05xxxxxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-rose-500 font-mono"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      الخدمة الرئيسية المطلوبة:
                    </label>
                    <select
                      value={serviceNeeded}
                      onChange={(e) => setServiceNeeded(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
                    >
                      <option value="عقد صيانة وتجديد رخصة منصة سلامة">عقد صيانة وتجديد رخصة منصة سلامة</option>
                      <option value="توريد وتركيب شبكة رشاشات مياه ومضخات">توريد وتركيب شبكة رشاشات مياه ومضخات</option>
                      <option value="نظام إنذار حريق معنون وكواشف شعاعية">نظام إنذار حريق معنون وكواشف شعاعية</option>
                      <option value="نظام غاز نظيف FM-200 لغرف الكهرباء">نظام غاز نظيف FM-200 لغرف الكهرباء</option>
                      <option value="تصحيح ملاحظات تفتيش الدفاع المدني بالرياض">تصحيح ملاحظات تفتيش الدفاع المدني بالرياض</option>
                      <option value="اعتماد مخططات سلامة هندسية (SBC 801)">اعتماد مخططات سلامة هندسية (SBC 801)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5">
                    ملاحظات إضافية أو تفاصيل الاستفسار (اختياري):
                  </label>
                  <textarea
                    rows={2}
                    placeholder="أي تفاصيل تخص موعد الزيارة أو حالة التراخيص الحالية..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="booking-submit-btn"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#fceda2] to-[#b88d1d] hover:brightness-110 text-slate-950 font-black text-sm shadow-xl shadow-amber-950/50 border border-[#fceda2]/60 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>تأكيد طلب المعاينة الهندسية المجانية بالرياض</span>
                  </button>
                </div>

                <p className="text-[11px] text-center text-slate-400">
                  🔒 نلتزم بسرية بيانات المنشأة ومواعيد التفتيش. خدماتنا حصرية داخل مدينة الرياض.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
