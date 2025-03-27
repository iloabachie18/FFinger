import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

const RecommendedProducts = () => {
  // Sample product data
  const products = [
    {
      id: 101,
      name: 'Minimalist Gold Heart Pendant Necklace for Women',
      imageUrl: 'https://ext.same-assets.com/3074087479/2730303502.webp',
      price: '$4.49',
      originalPrice: '$5.99',
      rating: 4.5,
      reviewCount: 423,
      link: '/product/101',
    },
    {
      id: 102,
      name: 'Tie Dye Oversized T-Shirt with Short Sleeve',
      imageUrl: 'https://ext.same-assets.com/3074087479/2150014672.webp',
      price: '$9.99',
      originalPrice: '$16.99',
      rating: 4.3,
      reviewCount: 215,
      link: '/product/102',
    },
    {
      id: 103,
      name: 'High Waisted Denim Shorts with Raw Hem',
      imageUrl: 'https://ext.same-assets.com/3074087479/4046018783.webp',
      price: '$12.99',
      originalPrice: '$19.99',
      rating: 4.7,
      reviewCount: 312,
      link: '/product/103',
    },
    {
      id: 104,
      name: 'Floral Print Ruffle Trim Wrap Dress',
      imageUrl: 'https://ext.same-assets.com/3074087479/1586895224.webp',
      price: '$15.49',
      originalPrice: '$24.99',
      rating: 4.2,
      reviewCount: 198,
      link: '/product/104',
    },
    {
      id: 105,
      name: 'Stainless Steel Water Bottle with Minimalist Design',
      imageUrl: 'https://ext.same-assets.com/3074087479/3227208494.webp',
      price: '$7.99',
      originalPrice: '$12.99',
      rating: 4.6,
      reviewCount: 156,
      link: '/product/105',
    },
    {
      id: 106,
      name: 'Canvas Tote Bag with Zipper and Inner Pocket',
      imageUrl: 'https://ext.same-assets.com/3074087479/1898576425.webp',
      price: '$8.99',
      originalPrice: '$14.99',
      rating: 4.4,
      reviewCount: 267,
      link: '/product/106',
    },
    {
      id: 107,
      name: 'Wireless Bluetooth Earbuds with Charging Case',
      imageUrl: 'https://ext.same-assets.com/3074087479/3579659722.webp',
      price: '$19.99',
      originalPrice: '$29.99',
      rating: 4.1,
      reviewCount: 189,
      link: '/product/107',
    },
    {
      id: 108,
      name: 'Ribbed Knit Crop Top with Wide Straps',
      imageUrl: 'https://ext.same-assets.com/3074087479/2322737961.webp',
      price: '$6.99',
      originalPrice: '$10.99',
      rating: 4.8,
      reviewCount: 345,
      link: '/product/108',
    }
  ];

  return (
    <section className="py-8 container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Recommended</h2>
        <Link href="/recommended" className="text-sm text-gray-600 hover:underline">View all &gt;</Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="rounded-none border-none shadow-sm overflow-hidden group">
            <Link href={product.link}>
              <CardContent className="p-0">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-2">
                  <p className="text-sm text-gray-800 line-clamp-2 h-10 mb-1">{product.name}</p>
                  <div className="flex items-center">
                    <span className="text-sm font-bold">{product.price}</span>
                    <span className="text-xs text-gray-500 line-through ml-2">{product.originalPrice}</span>
                  </div>
                  <div className="flex items-center mt-1 text-xs">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(Math.floor(product.rating))}
                      {product.rating % 1 >= 0.5 ? '★' : ''}
                      {'☆'.repeat(5 - Math.ceil(product.rating))}
                    </div>
                    <span className="text-gray-500 ml-1">({product.reviewCount})</span>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;
