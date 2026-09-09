export type FacilityType = 'warehouse' | 'factory' | 'commercial' | 'residential' | 'healthcare';

export interface CalculatorState {
  facilityType: FacilityType;
  area: number; // in m2
  height: number; // in meters
  floors: number;
  riyadhDistrict: string;
  hasHazardousMaterials: boolean;
  hasServerRoom: boolean;
}

export interface SystemRecommendation {
  id: string;
  name: string;
  category: 'extinguishing' | 'alarm' | 'gas' | 'pumps' | 'compliance';
  isRequired: boolean;
  standard: string;
  description: string;
  benefits: string[];
}

export interface RiyadhZone {
  id: string;
  name: string;
  zoneType: 'صناعي' | 'مستودعات وتخزين' | 'تجاري وإداري' | 'عام';
  responseTime: string;
  description: string;
  popularLocations: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  features: string[];
  civilDefenseCode: string;
  suitableFor: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  category: 'سلامة ورخص' | 'أنظمة الإطفاء' | 'عقود الصيانة' | 'المصانع والمستودعات';
}
