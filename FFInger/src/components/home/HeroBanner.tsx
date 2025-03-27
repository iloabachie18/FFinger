import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroBanner = () => {
  // Sample banner data
  const banners = [
    {
      id: 1,
      title: 'Spring Collection 2025',
      description: 'WELCOME TO THE FFINGER U.S SITE!',
      imageUrl: 'https://ext.same-assets.com/3074087479/262674179.webp',
      ctaLabel: 'Shop Now',
      ctaLink: '/collection/spring-2025',
      discount: '30%',
      promoText: 'Free Shipping & Free Returns',
    },
    {
      id: 2,
      title: 'Summer Styles',
      description: 'Vacation ready outfits',
      imageUrl: 'https://ext.same-assets.com/3074087479/4028047537.webp',
      ctaLabel: 'Shop Now',
      ctaLink: '/collection/summer-styles',
      discount: '25%',
      promoText: 'Limited Time Offer',
    },
    {
      id: 3,
      title: 'New Arrivals',
      description: 'Fresh styles just in',
      imageUrl: 'https://ext.same-assets.com/3074087479/306066802.webp',
      ctaLabel: 'Discover',
      ctaLink: '/new-arrivals',
      discount: '20%',
      promoText: 'Member Exclusive',
    },
  ];

  return (
    <section className="relative">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full max-w-screen-2xl mx-auto"
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id} className="w-full">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
                <Image
                  src={banner.imageUrl}
                  alt={banner.title}
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex items-center">
                  <div className="text-white p-6 md:p-12 max-w-xl">
                    <h2 className="text-2xl md:text-4xl font-bold mb-2">{banner.description}</h2>
                    <div className="bg-orange-500 text-white inline-block px-3 py-1 mb-4 text-xl md:text-3xl font-bold">
                      {banner.discount} OFF
                    </div>
                    <p className="mb-4 text-lg">{banner.promoText}</p>
                    <Link
                      href={banner.ctaLink}
                      className="bg-white text-black px-6 py-2 inline-block font-bold hover:bg-gray-100 transition-colors"
                    >
                      {banner.ctaLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </section>
  );
};

export default HeroBanner;
