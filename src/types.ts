export type PageType = 
  | 'products'
  | 'manufacturing'
  | 'oem-odm'
  | 'customization'
  | 'quality'
  | 'about';

export interface MaterialSpec {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  rigidity: number; // 0 - 10
  power: number; // 0 - 10
  control: number; // 0 - 10
  fiberType: string;
  core: string;
  profile: string;
  molds: string[];
  tensileModulus: string;
}

export interface RfqFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  platform: string;
  volume: string;
  modelType: string;
  carbonGrade: string;
  notes: string;
}
