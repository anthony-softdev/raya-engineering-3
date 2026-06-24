/**
 * Types defining data structures for Raya Engineering LTD website copy.
 */

export interface Product {
  id: string;
  name: string;
  sub: string;
  description: string;
  benefits?: string[];
  specs?: Record<string, string>;
  sizes?: {
    width: number;
    height: number;
    length: number;
    weightBlock: number;
    weightSqm: number;
  }[];
  category: 'blocks' | 'screed' | 'facade' | 'services';
  image: string;
}

export interface Benefit {
  number: string;
  title: string;
  description: string;
  linkText?: string;
  targetView?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Grade {
  grade: string;
  density: string;
  strength: string;
  bestFor: string;
}

export interface ComparisonRow {
  criteria: string;
  clc: string;
  hollow: string;
}

export interface ComplianceStandard {
  standard: string;
  description: string;
}

export interface ApplicationItem {
  id: string;
  title: string;
  description: string;
  image: string;
}
