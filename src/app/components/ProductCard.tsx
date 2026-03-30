import { Product } from "../data/products";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={isEnglish ? product.nameEn : product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="text-xs font-semibold text-blue-600 mb-2">
          {t(`categories.${product.category}`)}
        </div>
        <h3 className="font-bold text-lg mb-2 line-clamp-2">
          {isEnglish ? product.nameEn : product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {isEnglish ? product.descriptionEn : product.description}
        </p>
        <div className="text-xs text-gray-500 mb-3">
          {isEnglish ? product.specificationsEn : product.specifications}
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg text-blue-600">
            {product.price}
          </span>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
            {t('products.consult')}
          </button>
        </div>
      </div>
    </div>
  );
}
