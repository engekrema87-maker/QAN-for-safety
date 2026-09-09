import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Warehouse, 
  Factory, 
  Store, 
  Stethoscope, 
  GraduationCap, 
  Hotel,
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  MessageSquare, 
  Phone, 
  Printer, 
  ArrowRight, 
  Flame, 
  BellRing, 
  DoorClosed, 
  Sparkles, 
  FileCheck2, 
  ChevronRight, 
  HelpCircle,
  Clock,
  Layers
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

// Types for Salamah Investor Journey
export type ActivityCategory = 
  | 'warehouses' 
  | 'factories' 
  | 'commercial' 
  | 'offices' 
  | 'healthcare' 
  | 'education' 
  | 'hospitality';

export type AreaRange = 
  | 'small' // < 200 sqm
  | 'medium' // 200 - 500 sqm
  | 'large' // 500 - 1500 sqm
  | 'extra-large' // 1500 - 5000 sqm
  | 'mega'; // > 5000 sqm

export type HazardLevel = 'light' | 'ordinary' | 'extra';

interface SalamahInvestorJourneyProps {
  onOpenBooking?: () => void;
}

export const SalamahInvestorJourney: React.FC<SalamahInvestorJourneyProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory>('warehouses');
  const [selectedArea, setSelectedArea] = useState<AreaRange>('large');
  const [hazardLevel, setHazardLevel] = useState<HazardLevel>('ordinary');
  const [floorsCount, setFloorsCount] = useState<number>(1);
  const [hasServerRoom, setHasServerRoom] = useState<boolean>(true);
  const [riyadhDistrict, setRiyadhDistrict] = useState<string>('السلي والمشاعل');
  const [activeTab, setActiveTab] = useState<'requirements' | 'journey' | 'docs'>('requirements');

  // Categories list modeled after Salamah portal investor journey
  const categories = [
    { 
      id: 'warehouses' as ActivityCategory, 
      name: 'مستودعات وتخزين لوجستي', 
      icon: Warehouse, 
      desc: 'مستودعات بضائع، هناجر، مراكز لوجستية، غرف تبريد وتجميد' 
    },
    { 
      id: 'factories' as ActivityCategory, 
      name: 'مصانع ومنشآت صناعية', 
      icon: Factory, 
      desc: 'خطوط إنتاج، ورش تصنيع، مصانع بلاستيك ومواد كيماوية وغذائية' 
    },
    { 
      id: 'commercial' as ActivityCategory, 
      name: 'مراكز تجارية ومحلات', 
      icon: Store, 
      desc: 'مولات، أسواق تجارية، معارض، محلات تجزئة، ومطاعم كبرى' 
    },
    { 
      id: 'offices' as ActivityCategory, 
      name: 'مباني إدارية ومقرات شركات', 
      icon: Building2, 
      desc: 'أبراج مكتبية، مقرات شركات، مراكز أعمال وخدمات' 
    },
    { 
      id: 'healthcare' as ActivityCategory, 
      name: 'منشآت طبية وصحية', 
      icon: Stethoscope, 
      desc: 'مستشفيات، مجمعات عيادات، مراكز رعاية وصيدليات كبرى' 
    },
    { 
      id: 'education' as ActivityCategory, 
      name: 'منشآت تعليمية وتدريب', 
      icon: GraduationCap, 
      desc: 'مدارس خاصة، مراكز تدريب ومعاهد، حضانات أطفال' 
    },
    { 
      id: 'hospitality' as ActivityCategory, 
      name: 'فنادق وشقق مفروشة', 
      icon: Hotel, 
      desc: 'فنادق، أجنحة فندقية، مباني إيواء سياحي وسكن عمالة' 
    }
  ];

  // Requirements calculation based on Saudi Building Code SBC 801 & Civil Defense Salamah regulations
  const requirements = useMemo(() => {
    const isBig = selectedArea === 'large' || selectedArea === 'extra-large' || selectedArea === 'mega';
    const isMega = selectedArea === 'extra-large' || selectedArea === 'mega';
    const isWarehouse = selectedCategory === 'warehouses';
    const isFactory = selectedCategory === 'factories';
    const isCommercial = selectedCategory === 'commercial';
    const isMultiFloor = floorsCount > 2;

    // Suppression Requirements
    const suppression = [];
    if (isWarehouse) {
      if (isMega) {
        suppression.push({
          title: 'شبكة رشاشات مائية أوتوماتيكية عالية التدفق (ESFR)',
          desc: 'إلزامية للأسقف العالية لتوفير حماية سريعة للبضائع بدون الحاجة لرشاشات داخل الأرفف.',
          code: 'SBC 801 / NFPA 13',
          mandatory: true
        });
      } else if (isBig || hazardLevel !== 'light') {
        suppression.push({
          title: 'شبكة رشاشات مياه أوتوماتيكية (Wet Sprinklers)',
          desc: 'تغطية كاملة لكافة المساحات التخزينية وفق المسافات المعيارية.',
          code: 'SBC 801 / جدول الحماية المائية',
          mandatory: true
        });
      }
      suppression.push({
        title: 'كبائن وخراطيم إطفاء مائية (Fire Hose Reels)',
        desc: 'صناديق حريق قطر 1 أو 1.5 بوصة موزعة بحيث لا تزيد المسافة بين أي نقطة وكابينة عن 30 متراً.',
        code: 'SBC 801 / NFPA 14',
        mandatory: true
      });
      suppression.push({
        title: 'مضخة حريق رئيسية معتمدة UL/FM وخزان مياه مخصص',
        desc: 'مجموعة مضخات (ديزل + كهرباء + جوكي) مع خزان مياه حريق سعة تشغيلية 60-120 دقيقة.',
        code: 'SBC 801 / معايير سلامة',
        mandatory: true
      });
    } else if (isFactory) {
      suppression.push({
        title: 'شبكة رش آلي متكاملة (مائية ورغوية إذا لزم الأمر)',
        desc: 'حماية مناطق التصنيع والمواد الأولية، مع شبكة رغوة للمصانع الكيميائية والبلاستيكية.',
        code: 'SBC 801 / NFPA 13 & 16',
        mandatory: true
      });
      suppression.push({
        title: 'كبائن إطفاء حريق جدارية مع محابس دفاع مدني',
        desc: 'موزعة عند المداخل ومسارات الحركة لفرق الإطفاء والتدخل السريع.',
        code: 'SBC 801',
        mandatory: true
      });
      suppression.push({
        title: 'مضخة حريق معتمدة مع لوحة تحكم أوتوماتيكية',
        desc: 'تشغيل فوري لمضخة الديزل عند انقطاع الكهرباء للحفاظ على ضغط الشبكة.',
        code: 'SBC 801 / NFPA 20',
        mandatory: true
      });
    } else {
      // Commercial, offices, etc.
      if (isBig || isMultiFloor) {
        suppression.push({
          title: 'شبكة رشاشات مائية تلقائية (مخفية أو شبه مخفية للمحلات والمكاتب)',
          desc: 'حماية سريعة متناسقة مع الديكورات المعمارية وفق متطلبات كود المباني.',
          code: 'SBC 801',
          mandatory: true
        });
      }
      suppression.push({
        title: 'صناديق حريق وبكرات خراطيم مطابقة للمواصفات',
        desc: 'تغطية متكاملة لجميع الأدوار والممرات الرئيسية.',
        code: 'SBC 801 / كود الإطفاء',
        mandatory: true
      });
      if (isMultiFloor || isBig) {
        suppression.push({
          title: 'مضخة حريق معتمدة وخزان مياه احتياطي',
          desc: 'تأمين تدفق مستمر للمياه وفق الحسابات الهيدروليكية المعتمدة.',
          code: 'NFPA 20',
          mandatory: true
        });
      }
    }

    // Handheld extinguishers
    suppression.push({
      title: 'طفايات حريق يدوية موزعة (بودرة ABC وثاني أكسيد الكربون CO2)',
      desc: 'طفاية بودرة 6 كجم لكل 100-150 م²، مع طفايات CO2 مخصصة للوحات الكهرباء وأجهزة الكمبيوتر.',
      code: 'NFPA 10 / اشتراطات الدفاع المدني',
      mandatory: true
    });

    if (hasServerRoom) {
      suppression.push({
        title: 'نظام إطفاء تلقائي بالغاز النظيف (FM-200 أو Novec 1230)',
        desc: 'حماية غرف السيرفرات ومراكز التحكم وغرف الكهرباء الرئيسية بدون استخدام المياه لتجنب تلف الأجهزة.',
        code: 'NFPA 2001 / متطلبات سلامة',
        mandatory: true
      });
    }

    // Alarm & Detection Requirements
    const alarm = [
      {
        title: isBig || isMultiFloor ? 'نظام إنذار حريق معنون ذكي (Addressable Fire Alarm Panel)' : 'لوحة إنذار حريق معتمدة من الدفاع المدني',
        desc: 'لوحة تحكم رئيسية تحدد بدقة نقطة ورقم الكاشف الذي أطلق التنبيه لسرعة التدخل.',
        code: 'SBC 801 / NFPA 72',
        mandatory: true
      }
    ];

    if (isWarehouse && (selectedArea === 'large' || selectedArea === 'extra-large' || selectedArea === 'mega')) {
      alarm.push({
        title: 'كواشف دخان شعاعية (Beam Detectors) للأسقف العالية',
        desc: 'تغطي المساحات المرتفعة والجمالونات حتى ارتفاع 18 متراً وتوفر كشفاً فائق السرعة للدخان المتصاعد.',
        code: 'SBC 801 / NFPA 72',
        mandatory: true
      });
    } else {
      alarm.push({
        title: 'كواشف دخان وحرارة معنونة ذكية',
        desc: 'موزعة داخل الغرف، الممرات، المستودعات، والأسقف المستعارة مع كواشف حرارية في المطابخ وغرف المحولات.',
        code: 'كود SBC 801',
        mandatory: true
      });
    }

    alarm.push({
      title: 'كواسر زجاجية يدوية (Manual Call Points) عند المخارج',
      desc: 'تثبت عند كل مخرج طوارئ على ارتفاع 1.2 إلى 1.4 متر لإطلاق الإنذار يدوياً في ثوانٍ.',
      code: 'SBC 801',
      mandatory: true
    });

    alarm.push({
      title: 'سارينات إنذار صوتية وضوئية وميضية (Horn Strobes)',
      desc: 'تنبيه سمعي وبصري واضح يصل لكافة المتواجدين في المبنى حتى في بيئات العمل الصاخبة.',
      code: 'SBC 801 / اشتراطات السلامة',
      mandatory: true
    });

    // Architectural & Passive Safety
    const passive = [
      {
        title: 'لوحات مخارج الطوارئ المضيئة (Illuminated Exit Signs)',
        desc: 'لوحات ذاتية الإضاءة ببطاريات احتياطية تدوم 90 دقيقة تعمل تلقائياً عند انقطاع التيار الكهربائي.',
        code: 'SBC 801 / كود مسالك الهروب',
        mandatory: true
      },
      {
        title: 'إنارة طوارئ احتياطية لمسارات الإخلاء والسلالم',
        desc: 'توزيع كشافات الطوارئ لضمان وضوح مسار الهروب الآمن في الظلام التام.',
        code: 'SBC 801 / NFPA 101',
        mandatory: true
      },
      {
        title: 'أبواب طوارئ مقاومة للحريق مع مقابض ذعر (Panic Hardware)',
        desc: 'أبواب مقاومة للحريق لمدة 90 إلى 120 دقيقة، تفتح باتجاه الهروب تلقائياً دون مفاتيح.',
        code: 'SBC 801 / الأبواب المقاومة',
        mandatory: true
      },
      {
        title: 'لوحات ومخططات خطة الإخلاء والرموز الإرشادية',
        desc: 'تثبيت مخططات الإخلاء واضحة عند المداخل ومصاعد الطوارئ ومسارات الحركة الرئيسية.',
        code: 'لوائح الدفاع المدني بالرياض',
        mandatory: true
      }
    ];

    // Salamah Portal Documentation
    const salamahDocs = [
      {
        title: 'عقد صيانة سنوي إلكتروني ساري مسجل على منصة سلامة',
        desc: 'توثقه وتصدره QAN للسلامة فورياً عبر بوابة سلامة المعتمدة التابعة للمديرية العامة للدفاع المدني.',
        mandatory: true
      },
      {
        title: 'شهادة إنجاز وتركيب وتجربة أنظمة السلامة والحريق',
        desc: 'صادرة من QAN للسلامة تفيد بأن كافة الشبكات والمضخات تم فحصها واختبارها وتعمل بكفاءة 100%.',
        mandatory: true
      },
      {
        title: 'مخططات السلامة والوقاية من الحريق المعتمدة',
        desc: 'مخططات تصميمية معتمدة من مكتب هندسي استشاري مرخص وفق كود البناء السعودي SBC 801.',
        mandatory: isBig || isFactory || isWarehouse
      },
      {
        title: 'شهادة أدوات السلامة للمبنى وفاتورة التركيب',
        desc: 'توثيق رسمي لجميع المعدات وأجهزة الإطفاء المثبتة في الموقع.',
        mandatory: true
      },
      {
        title: 'تقرير فني مساحي ومعماري لمطابقة الموقع والنشاط',
        desc: 'إرفاق بيانات النشاط والموقع الجغرافي داخل نطاق مدينة الرياض.',
        mandatory: true
      }
    ];

    return { suppression, alarm, passive, salamahDocs };
  }, [selectedCategory, selectedArea, hazardLevel, floorsCount, hasServerRoom]);

  // Generate WhatsApp inquiry text with the specific investor selections
  const generateWhatsAppMessage = () => {
    const categoryObj = categories.find(c => c.id === selectedCategory);
    const categoryName = categoryObj ? categoryObj.name : 'المنشأة';
    const areaLabels: Record<AreaRange, string> = {
      'small': 'أقل من 200 م²',
      'medium': '200 - 500 م²',
      'large': '500 - 1500 م²',
      'extra-large': '1500 - 5000 م²',
      'mega': 'أكثر من 5000 م²'
    };

    const text = `السلام عليكم ورحمة الله،
أود الاستفسار مع QAN للسلامة حول اشتراطات منصة سلامة وإصدار رخصة الدفاع المدني لموقعي بالرياض:
- نوع النشاط: ${categoryName}
- المساحة التقريبية: ${areaLabels[selectedArea]}
- عدد الأدوار: ${floorsCount}
- نطاق الموقع بالرياض: ${riyadhDistrict}
- هل توجد غرفة سيرفرات/كهرباء: ${hasServerRoom ? 'نعم (تتطلب FM200)' : 'لا'}

أرجو التواصل لتحديد المتطلبات وحجز معاينة هندسية ميدانية مجانية من مهندس QAN للسلامة.`;

    return `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="requirements" className="py-16 sm:py-20 bg-[#09090d] text-slate-100 border-b border-[#d4af37]/20 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header with Salamah Portal Theme */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161d2a] border border-slate-700 text-slate-200 text-xs font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>بوابة سلامة للدفاع المدني | استعلام رحلة المستثمر</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-3">
            معرفة متطلبات السلامة وتراخيص الدفاع المدني{' '}
            <span className="text-[#d4af37]">
              (رحلة المستثمر بالرياض)
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            استعلام هندسي موثق لكافة المتطلبات الإلزامية لنشاطك التجاري أو الصناعي أو المستودع في مدينة الرياض وفق <span className="text-white font-semibold">كود البناء السعودي SBC 801</span> ولوائح <span className="text-emerald-400 font-semibold">بوابة سلامة</span>، بإشراف مهندسي <span className="text-[#d4af37] font-bold">QAN للسلامة</span>.
          </p>
        </div>

        {/* Step 1: Select Main Activity Category (رحلة المستثمر: تحديد النشاط) */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#8a640c] text-slate-950 font-black text-sm flex items-center justify-center">
                ١
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                اختر النشاط الرئيسي لمنشأتك
              </h3>
            </div>
            <span className="text-xs text-[#d4af37] hidden sm:inline-block">
              مصنفة طبقاً للائحة التراخيص في منصة سلامة
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  id={`activity-tab-${cat.id}`}
                  className={`p-3.5 sm:p-4 rounded-xl border text-right transition-all flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#151c28] border-[#d4af37] shadow-md ring-1 ring-[#d4af37]'
                      : 'bg-[#10141d] border-slate-800 hover:border-slate-700 hover:bg-[#131924] text-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between w-full mb-2">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#d4af37] text-slate-950 font-bold' : 'bg-slate-800 text-[#d4af37]'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    )}
                  </div>
                  <div>
                    <span className={`block font-bold text-sm sm:text-base ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                      {cat.name}
                    </span>
                    <span className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-snug">
                      {cat.desc}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Facility Properties & Specs (مواصفات المنشأة والموقع في الرياض) */}
        <div className="mb-10 p-5 sm:p-6 rounded-xl bg-[#111722] border border-slate-800 shadow-md">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-6 h-6 rounded-md bg-[#d4af37] text-slate-950 font-black text-xs flex items-center justify-center">
              ٢
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              مواصفات الموقع والمساحة في الرياض
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Area Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                المساحة الإجمالية للموقع (م²)
              </label>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value as AreaRange)}
                id="select-facility-area"
                className="w-full bg-[#181822] border border-slate-700 focus:border-[#d4af37] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
              >
                <option value="small">أقل من 200 م² (محلات ومكاتب صغيرة)</option>
                <option value="medium">200 - 500 م² (معارض ومستودعات متوسطة)</option>
                <option value="large">500 - 1,500 م² (مستودعات وورش كبرى)</option>
                <option value="extra-large">1,500 - 5,000 م² (مجمعات لوجستية ومصانع)</option>
                <option value="mega">أكثر من 5,000 م² (مشاريع كبرى ومناطق تخزين ضخمة)</option>
              </select>
            </div>

            {/* Floors Count */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                عدد الطوابق / الأدوار
              </label>
              <select
                value={floorsCount}
                onChange={(e) => setFloorsCount(Number(e.target.value))}
                id="select-floors-count"
                className="w-full bg-[#181822] border border-slate-700 focus:border-[#d4af37] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
              >
                <option value={1}>دور أرضي فقط (هنجر أو مستودع أو صالة)</option>
                <option value={2}>دوران أو دور أرضي + ميزانين</option>
                <option value={4}>3 - 5 أدوار (مبنى تجاري أو إداري)</option>
                <option value={8}>أكثر من 6 أدوار (برج أو مبنى مرتفع)</option>
              </select>
            </div>

            {/* Hazard Class */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                تصنيف درجة الخطورة
              </label>
              <select
                value={hazardLevel}
                onChange={(e) => setHazardLevel(e.target.value as HazardLevel)}
                id="select-hazard-level"
                className="w-full bg-[#181822] border border-slate-700 focus:border-[#d4af37] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
              >
                <option value="light">خطورة خفيفة (مكاتب، عيادات، خدمات)</option>
                <option value="ordinary">خطورة عادية (مستودعات بضائع عامة، محلات)</option>
                <option value="extra">خطورة عالية (مواد قابلة للاشتعال، بلاستيك، كيماويات)</option>
              </select>
            </div>

            {/* Riyadh District */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                نطاق المنشأة بمدينة الرياض
              </label>
              <select
                value={riyadhDistrict}
                onChange={(e) => setRiyadhDistrict(e.target.value)}
                id="select-riyadh-district"
                className="w-full bg-[#181822] border border-slate-700 focus:border-[#d4af37] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
              >
                <option value="السلي والمشاعل">منطقة السلي والمشاعل (مستودعات)</option>
                <option value="المدينة الصناعية الثانية">المدينة الصناعية الثانية بالرياض (مصانع)</option>
                <option value="طريق الخرج">طريق الخرج والصناعية القديمة</option>
                <option value="شمال الرياض">شمال الرياض (الملقا، الياسمين، العقيق)</option>
                <option value="شرق الرياض">شرق الرياض وحي الرمال</option>
                <option value="وسط وغرب الرياض">وسط وغرب الرياض والدرعية</option>
              </select>
            </div>

          </div>

          {/* Quick toggle for sensitive server/electrical room */}
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="has-server-room"
                checked={hasServerRoom}
                onChange={(e) => setHasServerRoom(e.target.checked)}
                className="w-4 h-4 rounded text-[#d4af37] bg-slate-900 border-slate-700 focus:ring-[#d4af37] cursor-pointer"
              />
              <label htmlFor="has-server-room" className="text-slate-300 font-medium cursor-pointer">
                هل يحتوي الموقع على غرفة سيرفرات / مركز بيانات / غرفة لوحات كهرباء رئيسية؟ (يتطلب نظام غاز FM200)
              </label>
            </div>

            <span className="text-[#fceda2] text-xs font-semibold">
              مطابق لكود البناء السعودي SBC 801
            </span>
          </div>
        </div>

        {/* Step 3: Interactive Results & Requirements Dashboard (المتطلبات التفصيلية المعروضة) */}
        <div className="bg-[#12121a] rounded-3xl border border-[#d4af37]/30 p-6 sm:p-8 shadow-2xl relative">
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#d4af37]/20">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                  بيانات بوابة سلامة المعتمدة
                </span>
                <span className="text-xs text-slate-400">
                  كود النشاط والاشتراطات بالرياض
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                دليل المتطلبات الإلزامية لنشاط: {categories.find(c => c.id === selectedCategory)?.name}
              </h3>
            </div>

            {/* Sub Tabs */}
            <div className="flex items-center gap-2 bg-[#0c0c10] p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('requirements')}
                id="tab-btn-requirements"
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'requirements'
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#8a640c] text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                الأنظمة الإلزامية
              </button>
              <button
                onClick={() => setActiveTab('docs')}
                id="tab-btn-docs"
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'docs'
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#8a640c] text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                وثائق ورخص سلامة
              </button>
              <button
                onClick={() => setActiveTab('journey')}
                id="tab-btn-journey"
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'journey'
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#8a640c] text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                مسار رحلة المستثمر
              </button>
            </div>
          </div>

          {/* TAB 1: Systems Requirements (إطفاء، إنذار، مخارج طوارئ) */}
          {activeTab === 'requirements' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              
              {/* Category 1: Active Fire Suppression Systems */}
              <div>
                <div className="flex items-center gap-2 mb-3.5">
                  <div className="p-1.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
                    <Flame className="w-4 h-4" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    ١. أنظمة مكافحة الحريق الإلزامية (Fire Suppression)
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {requirements.suppression.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-[#161620] border border-slate-800/90 hover:border-[#d4af37]/40 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="font-bold text-sm sm:text-base text-[#fceda2]">
                            {item.title}
                          </span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#d4af37]/10 text-[#fceda2] border border-[#d4af37]/30 font-mono shrink-0">
                          {item.code}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 pr-6 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 2: Fire Alarm & Detection Systems */}
              <div>
                <div className="flex items-center gap-2 mb-3.5">
                  <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <BellRing className="w-4 h-4" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    ٢. أنظمة الإنذار والكشف المبكر عن الحريق (Fire Alarm Systems)
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {requirements.alarm.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-[#161620] border border-slate-800/90 hover:border-[#d4af37]/40 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                          <span className="font-bold text-sm sm:text-base text-white">
                            {item.title}
                          </span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 font-mono shrink-0">
                          {item.code}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 pr-6 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 3: Architectural & Emergency Exits */}
              <div>
                <div className="flex items-center gap-2 mb-3.5">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <DoorClosed className="w-4 h-4" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    ٣. المتطلبات المعمارية ومسالك الهروب وطوارئ الإخلاء
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {requirements.passive.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-[#161620] border border-slate-800/90 hover:border-[#d4af37]/40 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                          <span className="font-bold text-sm sm:text-base text-white">
                            {item.title}
                          </span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 font-mono shrink-0">
                          {item.code}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 pr-6 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Salamah Portal Official Documents & Licences */}
          {activeTab === 'docs' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#141208] to-[#0d0d12] border border-[#d4af37]/40 mb-4">
                <div className="flex items-center gap-2 text-[#fceda2] font-bold text-sm mb-1">
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <span>خدمة توثيق فورية عبر منصة سلامة من QAN للسلامة</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  توفر QAN للسلامة كافة الوثائق الهندسية المعتمدة وترفعها مباشرة على حساب منشأتكم في بوابة سلامة، لإصدار ترخيص الدفاع المدني وتجديد رخصة بلدي الفورية دون أي مراجعات أو تأخير.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {requirements.salamahDocs.map((doc, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-[#161620] border border-slate-800/90 flex items-start gap-3"
                  >
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                      <FileCheck2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm sm:text-base text-white">
                          {doc.title}
                        </span>
                        {doc.mandatory && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-500/10 text-red-300 border border-red-500/30">
                            إلزامي
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {doc.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Investor Journey (رحلة المستثمر من الألف إلى الياء) */}
          {activeTab === 'journey' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center max-w-2xl mx-auto mb-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  مراحل رحلة المستثمر لإصدار رخصة الدفاع المدني بالرياض
                </h4>
                <p className="text-xs sm:text-sm text-slate-400">
                  خطوات مبسطة توفر عليك الوقت والجهد وتضمن استخراج رخصتك بأسرع وقت
                </p>
              </div>

              <div className="relative border-r-2 border-[#d4af37]/30 pr-6 mr-3 sm:mr-6 space-y-8">
                
                {/* Step 1 */}
                <div className="relative">
                  <div className="absolute -right-[31px] top-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8a640c] text-slate-950 font-bold text-xs flex items-center justify-center ring-4 ring-[#12121a]">
                    ١
                  </div>
                  <h5 className="text-base font-bold text-[#fceda2] mb-1">
                    الاستعلام وتحديد الاشتراطات الدقيقة
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    باستخدام هذه الأداة، يتعرف المستثمر على الأنظمة الإلزامية لنشاطه وفق تصنيف الخطورة وكود البناء السعودي SBC 801 قبل استئجار أو تجهيز الموقع.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="absolute -right-[31px] top-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8a640c] text-slate-950 font-bold text-xs flex items-center justify-center ring-4 ring-[#12121a]">
                    ٢
                  </div>
                  <h5 className="text-base font-bold text-white mb-1">
                    معاينة هندسية ميدانية مجانية من QAN للسلامة
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    يتوجه مهندس مختص من QAN للسلامة إلى موقعك في الرياض لفحص الشبكات القائمة أو رفع المقاسات الهندسية ومطابقتها لمتطلبات لجان تفتيش الدفاع المدني.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="absolute -right-[31px] top-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8a640c] text-slate-950 font-bold text-xs flex items-center justify-center ring-4 ring-[#12121a]">
                    ٣
                  </div>
                  <h5 className="text-base font-bold text-white mb-1">
                    التوريد والتركيب أو استكمال الملاحظات الفنية
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    تنفيذ أي نواقص في أجهزة الإنذار أو شبكات الرش الآلي أو طفايات الحريق أو صيانة المضخات وتجربتها هيدروليكياً للتأكد من جاهزيتها 100%.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <div className="absolute -right-[31px] top-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8a640c] text-slate-950 font-bold text-xs flex items-center justify-center ring-4 ring-[#12121a]">
                    ٤
                  </div>
                  <h5 className="text-base font-bold text-white mb-1">
                    رفع عقد الصيانة وشهادة الإنجاز على بوابة سلامة
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    تقوم QAN للسلامة باعتماد وربط العقد الإلكتروني وشهادة التركيب على منصة سلامة رسمياً، وتزويد العميل برقم العقد وشهادة الإنجاز فورياً.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="relative">
                  <div className="absolute -right-[31px] top-0 w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center ring-4 ring-[#12121a]">
                    ٥
                  </div>
                  <h5 className="text-base font-bold text-emerald-400 mb-1">
                    صدور رخصة الدفاع المدني الفورية وتجديد رخصة بلدي
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    اكتمال الطلب إلكترونياً بنجاح، مما يمكنك من طباعة رخصة الدفاع المدني ومزاولة النشاط بأمان وتجنب أي غرامات أو إيقاف خدمات.
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* Action Footer Controls */}
          <div className="mt-8 pt-6 border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
              {/* WhatsApp Action with Pre-populated Requirements */}
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                id="requirements-whatsapp-export-btn"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/40 transition-all hover:scale-102"
              >
                <MessageSquare className="w-4 h-4" />
                <span>إرسال المتطلبات لمهندس QAN للسلامة بالواتساب</span>
              </a>

              {/* Direct Call */}
              <a
                href={COMPANY_INFO.phoneHref}
                id="requirements-call-btn"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#997312] text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all hover:brightness-110"
                dir="ltr"
              >
                <Phone className="w-4 h-4" />
                <span>0500098117</span>
              </a>

              {/* Print / Save Report */}
              <button
                onClick={handlePrint}
                id="requirements-print-btn"
                className="p-3 rounded-xl bg-[#1c1c28] border border-slate-700 text-slate-300 hover:text-white hover:border-[#d4af37]/40 transition-colors cursor-pointer"
                title="طباعة تقرير المتطلبات"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>

            {/* Free Inspection Trigger */}
            <div className="text-right w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                id="requirements-booking-trigger"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#fceda2] hover:text-white py-2 px-3 rounded-lg hover:bg-[#1f1f2c] transition-colors cursor-pointer"
              >
                <span>طلب معاينة هندسية ميدانية مجانية بالرياض</span>
                <ChevronRight className="w-4 h-4 text-[#d4af37]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
