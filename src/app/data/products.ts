export interface Product {
  id: number;
  name: string;
  nameEn: string;
  category: string;
  description: string;
  descriptionEn: string;
  specifications: string;
  specificationsEn: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 2,
    name: "Petróleo Crudo Pesado",
    nameEn: "Heavy Crude Oil",
    category: "Crudo",
    description: "Crudo pesado ideal para refinación especializada",
    descriptionEn: "Heavy crude ideal for specialized refining",
    specifications: "API 18-25°, Azufre 1.5-3%",
    specificationsEn: "API 18-25°, Sulfur 1.5-3%",
    price: "$850/barril",
    image: "https://images.unsplash.com/photo-1680970422424-f63d2355adb3?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    name: "Queroseno Aviación JET A-1",
    nameEn: "JET A-1 Aviation Kerosene",
    category: "Aviación",
    description: "Combustible de aviación de máxima pureza",
    descriptionEn: "Maximum purity aviation fuel",
    specifications: "Punto de congelación -47°C",
    specificationsEn: "Freezing point -47°C",
    price: "$3.80/galón",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=400&h=300&fit=crop"
  },
  {
    id: 10,
    name: "Gas Natural Comprimido (GNC)",
    nameEn: "Compressed Natural Gas (CNG)",
    category: "Gas",
    description: "Gas natural comprimido para vehículos y uso industrial",
    descriptionEn: "Compressed natural gas for vehicles and industrial use",
    specifications: "Presión 200-250 bar",
    specificationsEn: "Pressure 200-250 bar",
    price: "$1.85/GGE",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=300&fit=crop"
  },
  {
    id: 11,
    name: "Lubricante Motor 5W-30",
    nameEn: "5W-30 Motor Oil",
    category: "Lubricantes",
    description: "Aceite sintético para motores modernos",
    descriptionEn: "Synthetic oil for modern engines",
    specifications: "Sintético completo, API SN Plus",
    specificationsEn: "Full synthetic, API SN Plus",
    price: "$8.50/cuarto",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop"
  },
  {
    id: 18,
    name: "Parafina Refinada",
    nameEn: "Refined Paraffin",
    category: "Ceras",
    description: "Cera de parafina de alta pureza",
    descriptionEn: "High purity paraffin wax",
    specifications: "Punto de fusión 58-60°C",
    specificationsEn: "Melting point 58-60°C",
    price: "$1,200/tonelada",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop"
  },
  {
    id: 19,
    name: "Coque de Petróleo",
    nameEn: "Petroleum Coke",
    category: "Combustibles Sólidos",
    description: "Subproducto del refino para combustible industrial",
    descriptionEn: "Refining byproduct for industrial fuel",
    specifications: "Azufre 3-6%",
    specificationsEn: "Sulfur 3-6%",
    price: "$180/tonelada",
    image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=300&fit=crop"
  },
  {
    id: 23,
    name: "Etileno Grado Polímero",
    nameEn: "Polymer Grade Ethylene",
    category: "Petroquímicos",
    description: "Materia prima para producción de plásticos",
    descriptionEn: "Raw material for plastics production",
    specifications: "Pureza >99.9%",
    specificationsEn: "Purity >99.9%",
    price: "$1,250/tonelada",
    image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=400&h=300&fit=crop"
  },
  {
    id: 31,
    name: "Metanol Grado Técnico",
    nameEn: "Technical Grade Methanol",
    category: "Petroquímicos",
    description: "Alcohol metílico para uso industrial",
    descriptionEn: "Methyl alcohol for industrial use",
    specifications: "Pureza >99.85%",
    specificationsEn: "Purity >99.85%",
    price: "$380/tonelada",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop"
  }
];
