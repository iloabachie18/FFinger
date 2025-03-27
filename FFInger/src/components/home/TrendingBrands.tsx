import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

const TrendingBrands = () => {
  // Sample brands data
  const brands = [
    {
      id: 1,
      name: 'DAZY',
      imageUrl: 'https://ext.same-assets.com/3074087479/262674179.webp',
      link: '/brands/dazy',
    },
    {
      id: 2,
      name: 'MOTF',
      imageUrl: 'https://ext.same-assets.com/3074087479/2456093871.webp',
      link: '/brands/motf',
    },
    {
      id: 3,
      name: 'FFINGER MOD',
      imageUrl: 'https://ext.same-assets.com/3074087479/2136295408.webp',
      link: '/brands/FFINGER-mod',
    },
    {
      id: 4,
      name: 'GLOWMODE',
      imageUrl: 'https://ext.same-assets.com/3074087479/1948435425.webp',
      link: '/brands/glowmode',
    },
    {
      id: 5,
      name: 'FFINGER BAE',
      imageUrl: 'https://ext.same-assets.com/3074087479/558321662.webp',
      link: '/brands/FFINGER-bae',
    }
  ];

  return (
    <section className="py-8 container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Trending Brands</h2>
        <Link href="/brands" className="text-sm text-gray-600 hover:underline">View all &gt;</Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {brands.map((brand) => (
          <Card key={brand.id} className="rounded-none border-none overflow-hidden shadow-sm">
            <Link href={brand.link}>
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={brand.imageUrl}
                    alt={brand.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                    <h3 className="text-white font-bold p-3 text-lg">{brand.name}</h3>
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

export default TrendingBrands;
