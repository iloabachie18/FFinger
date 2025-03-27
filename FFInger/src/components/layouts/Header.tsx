import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Heart, User, Globe } from "lucide-react";

const HeaderPromo = () => {
  return (
    <div className="bg-amber-700 text-white text-xs py-1 px-4 flex justify-around items-center">
      <div className="flex items-center">
        <div className="bg-red-500 text-white px-1 mr-2 text-[10px] uppercase font-bold flex items-center">
          <span>NEW</span>
          <span className="text-[9px] ml-0.5">USERS ONLY</span>
        </div>
        <span className="font-bold uppercase">FREE SHIPPING</span>
        <span className="mx-1">•</span>
        <span className="text-orange-300 font-bold">30% OFF COUPON</span>
        <span className="text-xs mx-1">YOUR FIRST ORDER</span>
        <span className="text-xs">*CONDITIONS APPLY</span>
      </div>
      <div className="hidden md:block text-center">
        <span className="font-bold uppercase">FREE RETURNS</span>
        <span className="text-xs mx-1">*CONDITIONS APPLY</span>
      </div>
      <div className="hidden md:block text-right">
        <span className="font-bold uppercase">PRICE ADJUSTMENT</span>
        <span className="text-xs mx-1">WITHIN 30 DAYS</span>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <HeaderPromo />

      <div className="container mx-auto py-3 px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <h1 className="text-4xl font-bold tracking-wide">SHEIN</h1>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6 relative">
          <div className="w-full max-w-xl relative">
            <Input
              type="text"
              placeholder="Nails"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-none focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Button variant="default" size="icon" className="absolute right-0 rounded-none bg-black hover:bg-gray-800">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Link href="/account" className="flex items-center">
            <User className="h-5 w-5" />
          </Link>
          <Link href="/cart" className="flex items-center">
            <ShoppingCart className="h-5 w-5" />
            <span className="ml-1">0</span>
          </Link>
          <Link href="/wishlist" className="flex items-center">
            <Heart className="h-5 w-5" />
            <span className="ml-1">0</span>
          </Link>
          <Link href="/language" className="hidden md:flex items-center">
            <Globe className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <ul className="flex overflow-x-auto whitespace-nowrap py-3 text-sm">
            <li className="mr-5"><Link href="/categories" className="hover:underline">Categories</Link></li>
            <li className="mr-5"><Link href="/new-in" className="hover:underline">New In</Link></li>
            <li className="mr-5"><Link href="/sale" className="hover:underline">Sale</Link></li>
            <li className="mr-5"><Link href="/women-clothing" className="hover:underline">Women Clothing</Link></li>
            <li className="mr-5"><Link href="/beachwear" className="hover:underline">Beachwear</Link></li>
            <li className="mr-5"><Link href="/kids" className="hover:underline">Kids</Link></li>
            <li className="mr-5"><Link href="/curve" className="hover:underline">Curve</Link></li>
            <li className="mr-5"><Link href="/men-clothing" className="hover:underline">Men Clothing</Link></li>
            <li className="mr-5"><Link href="/shoes" className="hover:underline">Shoes</Link></li>
            <li className="mr-5"><Link href="/underwear-sleepwear" className="hover:underline">Underwear & Sleepwear</Link></li>
            <li className="mr-5"><Link href="/home-kitchen" className="hover:underline">Home & Kitchen</Link></li>
            <li className="mr-5"><Link href="/jewelry-accessories" className="hover:underline">Jewelry & Accessories</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
