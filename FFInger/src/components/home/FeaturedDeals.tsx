import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

const FeaturedDeals = () => {
  // Sample deals data
  const deals = [
    {
      id: 1,
      title: 'Flash Sale',
      imageUrl: 'https://ext.same-assets.com/3074087479/2165407861.webp',
      price: '$15.99',
      originalPrice: '$22.99',
    },
    {
      id: 2,
      title: 'Beach Ready',
      imageUrl: 'https://ext.same-assets.com/3074087479/1505360924.webp',
      price: '$13.49',
      originalPrice: '$19.99',
    },
    {
      id: 3,
      title: 'Spring Style',
      imageUrl: 'https://ext.same-assets.com/3074087479/2180344895.webp',
      price: '$9.99',
      originalPrice: '$14.99',
    },
    {
      id: 4,
      title: 'Breakout',
      imageUrl: 'https://ext.same-assets.com/3074087479/3121529020.webp',
      price: '$8.49',
      originalPrice: '$16.99',
    },
    {
      id: 5,
      title: 'Trending',
      imageUrl: 'https://ext.same-assets.com/3074087479/1608378453.webp',
      price: '$12.29',
      originalPrice: '$18.99',
    }
  ];

  return (
    <section className="my-8 container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Super Deals</h2>
        <Link href="/deals" className="text-sm text-gray-600 hover:underline">View more &gt;</Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {deals.map((deal) => (
          <Card key={deal.id} className="rounded-none border-0 shadow-sm overflow-hidden group">
            <Link href={`/product/${deal.id}`}>
              <CardContent className="p-0 relative">
                <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                  <Image
                    src={deal.imageUrl}
                    alt={deal.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-2">
                  <p className="text-gray-800 mb-1">{deal.title}</p>
                  <div className="flex items-center">
                    <span className="text-sm font-bold">{deal.price}</span>
                    <span className="text-xs text-gray-500 line-through ml-2">{deal.originalPrice}</span>
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

export default FeaturedDeals;
