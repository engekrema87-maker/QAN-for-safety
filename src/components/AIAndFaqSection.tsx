import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, Search, MessageSquare, Phone, CheckCircle2 } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/companyData';

export const AIAndFaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQS[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['الكل', 'سلامة ورخص', 'المصانع والمستودعات', 'أنظمة الإطفاء', 'عقود الصيانة'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'الكل' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.detailedAnswer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-16 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161d2a] border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold mb-3">
            <HelpCircle className="w-4 h-4 text-[#d4af37]" />
            <span>الدليل الإرشادي والأسئلة الشائعة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
            الأسئلة الشائعة حول أنظمة الدفاع المدني وتراخيص سلامة بالرياض
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            إجابات هندسية موثقة ومحدثة وفق اشتراطات المديرية العامة للدفاع المدني وكود البناء السعودي SBC 801.
          </p>
        </div>

        {/* Structured Corporate Facts Block */}
        <div className="mb-10 p-5 rounded-xl bg-[#0d111a] border border-slate-800 text-xs text-slate-300">
          <div className="flex items-center gap-2 text-[#d4af37] font-bold mb-3 text-sm">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
            <span>بيانات الاعتماد والتغطية الرسمية - QAN للسلامة:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[#131926] p-3 rounded-lg border border-slate-800">
              <span className="text-slate-400 block text-[11px]">الاسم المعتمد:</span>
              <span className="font-bold text-white text-xs">QAN للسلامة</span>
            </div>
            <div className="bg-[#131926] p-3 rounded-lg border border-slate-800">
              <span className="text-slate-400 block text-[11px]">نطاق الخدمة الميدانية:</span>
              <span className="font-bold text-amber-300 text-xs">حصرياً داخل مدينة الرياض والمناطق الصناعية</span>
            </div>
            <div className="bg-[#131926] p-3 rounded-lg border border-slate-800">
              <span className="text-slate-400 block text-[11px]">الاتصال المباشر والواتساب:</span>
              <a href={COMPANY_INFO.phoneHref} className="font-bold text-[#d4af37] text-xs font-mono" dir="ltr">0500098117</a>
            </div>
            <div className="bg-[#131926] p-3 rounded-lg border border-slate-800">
              <span className="text-slate-400 block text-[11px]">الاعتمادات النظامية:</span>
              <span className="font-bold text-emerald-400 text-xs">منصة سلامة، الدفاع المدني، كود SBC 801</span>
            </div>
          </div>
        </div>

        {/* Category Filters and Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="ابحث في الأسئلة والأنظمة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 pr-9 pl-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-2.5" />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-slate-950 border-rose-500/50 shadow-lg shadow-rose-950/20'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-right p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 p-1.5 rounded-lg bg-slate-900 text-slate-400 border border-slate-800">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-rose-500" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 space-y-3 border-t border-slate-900">
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 text-rose-300 font-medium">
                      💡 <strong>الجواب المباشر:</strong> {faq.shortAnswer}
                    </div>

                    <p className="text-slate-300 leading-relaxed font-normal">
                      {faq.detailedAnswer}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="text-[11px] text-slate-400">
                        التصنيف: {faq.category} | معتمد لدى دفاع مدني الرياض
                      </span>
                      <a
                        href={`https://wa.me/966500098117?text=${encodeURIComponent(`السلام عليكم، قرأت في موقع QAN عن (${faq.question}) وأود الاستفسار أكثر لمنشأتي بالرياض.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>استفسر بخصوص هذا البند عبر الواتساب</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
