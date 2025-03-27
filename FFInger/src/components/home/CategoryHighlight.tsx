import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CategoryHighlight = () => {
  // Sample categories data
  const categories = [
    {
      id: 1,
      title: 'Women Clothing',
      imageUrl: 'https://ext.same-assets.com/3074087479/4046018783.webp',
      link: '/women-clothing',
    },
    {
      id: 2,
      title: 'Curve & Plus',
      imageUrl: 'https://ext.same-assets.com/3074087479/2158053889.webp',
      link: '/curve',
    },
    {
      id: 3,
      title: 'Kids',
      imageUrl: 'https://ext.same-assets.com/3074087479/1386262638.webp',
      link: '/kids',
    },
    {
      id: 4,
      title: 'Men Clothing',
      imageUrl: 'https://ext.same-assets.com/3074087479/1588882426.webp',
      link: '/men-clothing',
    },
    {
      id: 5,
      title: 'Dresses',
      imageUrl: 'https://ext.same-assets.com/3074087479/2097716020.webp',
      link: '/dresses',
    },
    {
      id: 6,
      title: 'Tops',
      imageUrl: 'https://ext.same-assets.com/3074087479/4129790354.webp',
      link: '/tops',
    },
    {
      id: 7,
      title: 'Beachwear',
      imageUrl: 'https://ext.same-assets.com/3074087479/3970316324.webp',
      link: '/beachwear',
    },
    {
      id: 8,
      title: 'Home & Living',
      imageUrl: 'https://ext.same-assets.com/3074087479/4168363965.webp',
      link: '/home-living',
    }
  ];

  return (
    <section className="py-8 container mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category) => (
          <Link href={category.link} key={category.id} className="block group">
            <div className="relative overflow-hidden rounded">
              <div className="aspect-w-1 aspect-h-1 relative pb-[100%]">
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2 text-sm font-medium">
                {category.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryHighlight;
