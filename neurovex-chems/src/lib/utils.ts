import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names using clsx and tailwind-merge.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  strength: string;
  format: 'Liquid' | 'Powder' | 'Capsule' | 'Vial';
  price: number;
  salePrice?: number;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  shortDescription: string;
  fullDescription: string;
  testingLink?: string;
  image: string;
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  tags?: string[];
}

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
};

export const CATEGORIES: Category[] = [
  {
    id: 'peptides',
    name: 'Peptides',
    slug: 'peptides',
    description: 'High-purity research peptides for biochemical analysis.',
    image: 'https://picsum.photos/seed/peptide/800/600',
  },
  {
    id: 'nootropics',
    name: 'Nootropics',
    slug: 'nootropics',
    description: 'Compounds for neuro-cognitive research profiling.',
    image: 'https://picsum.photos/seed/nootropic/800/600',
  },
  {
    id: 'hormone-support',
    name: 'Hormone Support',
    slug: 'hormone-support',
    description: 'Research compounds for endocrine pathway investigations.',
    image: 'https://picsum.photos/seed/hormone/800/600',
  },
  {
    id: 'research-liquids',
    name: 'Research Liquids',
    slug: 'research-liquids',
    description: 'Stabilized liquid formulations for precise metering.',
    image: 'https://picsum.photos/seed/liquid/800/600',
  },
  {
    id: 'blends',
    name: 'Blends',
    slug: 'blends',
    description: 'Synergistic compound combinations for comparative study.',
    image: 'https://picsum.photos/seed/blend/800/600',
  },
  {
    id: 'ancillaries',
    name: 'Ancillaries',
    slug: 'ancillaries',
    description: 'Laboratory supplies and auxiliary research agents.',
    image: 'https://picsum.photos/seed/lab/800/600',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Retatrutide',
    slug: 'retatrutide-10mg',
    category: 'Peptides',
    strength: '10mg',
    format: 'Vial',
    price: 189.99,
    stockStatus: 'In Stock',
    shortDescription: 'Triple-agonist research peptide for metabolic studies.',
    fullDescription: 'Retatrutide is a multi-receptor agonist being investigated for its impact on metabolic pathways. For laboratory research use only.',
    image: 'https://picsum.photos/seed/reta/800/800',
    featured: true,
    bestSeller: true,
  },
  {
    id: '2',
    name: 'Methylene Blue',
    slug: 'methylene-blue-10mg',
    category: 'Research Liquids',
    strength: '10mg/mL',
    format: 'Liquid',
    price: 45.00,
    stockStatus: 'In Stock',
    shortDescription: 'High-purity aqueous solution for enzymatic research.',
    fullDescription: 'Methylene Blue is a synthetic compound used in laboratory settings to investigate oxidation-reduction reactions.',
    image: 'https://picsum.photos/seed/blue/800/800',
    newArrival: true,
  },
  {
    id: '3',
    name: 'HCG',
    slug: 'hcg-5000iu',
    category: 'Hormone Support',
    strength: '5000 IU',
    format: 'Vial',
    price: 65.00,
    stockStatus: 'In Stock',
    shortDescription: 'Glycoprotein compound for endocrine research.',
    fullDescription: 'Standardized laboratory HCG for the investigation of receptor signaling and enzymatic pathways.',
    image: 'https://picsum.photos/seed/hcg/800/800',
  },
  {
    id: '4',
    name: 'MOTS-C',
    slug: 'mots-c-10mg',
    category: 'Peptides',
    strength: '10mg',
    format: 'Vial',
    price: 95.00,
    stockStatus: 'In Stock',
    shortDescription: 'Mitochondria-derived research peptide.',
    fullDescription: 'Investigation-grade MOTS-C for the study of mitochondrial function and cellular energetics.',
    image: 'https://picsum.photos/seed/mots/800/800',
    featured: true,
  },
  {
    id: '5',
    name: 'BPC-157',
    slug: 'bpc-157-5mg',
    category: 'Peptides',
    strength: '5mg',
    format: 'Vial',
    price: 55.00,
    stockStatus: 'In Stock',
    shortDescription: 'Synthesis-grade peptide for tissue research.',
    fullDescription: 'Body Protection Compound 157 is a pentadecapeptide investigated for its role in cellular signaling in laboratory models.',
    image: 'https://picsum.photos/seed/bpc/800/800',
    bestSeller: true,
  },
  {
    id: '6',
    name: 'NAD+',
    slug: 'nad-500mg',
    category: 'Nootropics',
    strength: '500mg',
    format: 'Vial',
    price: 120.00,
    stockStatus: 'In Stock',
    shortDescription: 'Coenzyme for redox and metabolic research.',
    fullDescription: 'Nicotinamide Adenine Dinucleotide (NAD+) for laboratory investigations of lifespan and cellular health markers.',
    image: 'https://picsum.photos/seed/nad/800/800',
  },
];
