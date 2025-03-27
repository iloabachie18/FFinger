import React from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-8 pb-4 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h6 className="text-xs font-bold mb-4 uppercase">Company Info</h6>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:underline">About SHEIN</Link></li>
              <li><Link href="/sustainability" className="hover:underline">Sustainability</Link></li>
              <li><Link href="/fashion-blogger" className="hover:underline">Fashion Blogger</Link></li>
              <li><Link href="/supply-chain" className="hover:underline">Supply Chain</Link></li>
              <li><Link href="/careers" className="hover:underline">Careers</Link></li>
              <li><Link href="/student-discount" className="hover:underline">Student Discount</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h6 className="text-xs font-bold mb-4 uppercase">Help & Support</h6>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shipping-info" className="hover:underline">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:underline">Returns</Link></li>
              <li><Link href="/refunds" className="hover:underline">Refunds</Link></li>
              <li><Link href="/how-to-order" className="hover:underline">How to Order</Link></li>
              <li><Link href="/how-to-track" className="hover:underline">How to Track</Link></li>
              <li><Link href="/size-guide" className="hover:underline">Size Guide</Link></li>
              <li><Link href="/shein-vip" className="hover:underline">SHEIN VIP</Link></li>
              <li><Link href="/sell-on-shein" className="hover:underline">Sell on SHEIN</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h6 className="text-xs font-bold mb-4 uppercase">Customer Care</h6>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/payment-tax" className="hover:underline">Payment & Tax</Link></li>
              <li><Link href="/bonus-point" className="hover:underline">Bonus Point</Link></li>
              <li><Link href="/recalls" className="hover:underline">Recalls</Link></li>
              <li><Link href="/coupon" className="hover:underline">Coupon</Link></li>
            </ul>
          </div>

          {/* Find Us On */}
          <div>
            <h6 className="text-xs font-bold mb-4 uppercase">Find Us On</h6>
            <div className="flex space-x-3 mb-6">
              <Link href="https://facebook.com/shein" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com/shein" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </Link>
              <Link href="https://twitter.com/shein" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </Link>
              <Link href="https://youtube.com/shein" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">
                <Youtube size={20} />
              </Link>
              <Link href="https://linkedin.com/company/shein" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Download App */}
          <div>
            <h6 className="text-xs font-bold mb-4 uppercase">Download SHEIN App To Save More!</h6>
            <div className="flex space-x-2 mb-4">
              <Link href="https://apps.apple.com/us/app/shein-fashion-shopping" className="block" target="_blank" rel="noopener noreferrer">
                <div className="bg-black text-white rounded p-1 text-xs w-28">
                  <p className="text-[8px]">Download on the</p>
                  <p className="font-bold">App Store</p>
                </div>
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.zzkko" className="block" target="_blank" rel="noopener noreferrer">
                <div className="bg-black text-white rounded p-1 text-xs w-28">
                  <p className="text-[8px]">GET IT ON</p>
                  <p className="font-bold">Google Play</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 mb-6">
          <h6 className="text-xs font-bold mb-4 uppercase">Sign up for SHEIN style news</h6>
          <div className="flex max-w-md">
            <div className="w-full">
              <Input
                type="email"
                placeholder="Email Address"
                className="rounded-none border-r-0 focus:outline-none"
              />
            </div>
            <Button className="rounded-none bg-black hover:bg-gray-800">
              Subscribe
            </Button>
          </div>
          <p className="text-xs mt-2">
            Please agree to our Privacy & Cookie Policy. By clicking the SUBSCRIBE button, you are agreeing to our Privacy & Cookie Policy
          </p>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-300 pt-6 mt-8">
          <h6 className="text-xs font-bold mb-4 uppercase text-center">We Accept</h6>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {/* Payment icons would go here */}
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-center mt-6">
          <p>©2009-2025 SHEIN All Rights Reserved</p>
          <div className="flex flex-wrap justify-center mt-2 gap-2">
            <Link href="/privacy-center" className="hover:underline">Privacy Center</Link>
            <span>|</span>
            <Link href="/privacy-policy" className="hover:underline">Privacy & Cookie Policy</Link>
            <span>|</span>
            <Link href="/do-not-sell" className="hover:underline">Do Not Sell or Share My Personal Information</Link>
            <span>|</span>
            <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
            <span>|</span>
            <Link href="/copyright" className="hover:underline">IP Notice</Link>
            <span>|</span>
            <Link href="/accessibility" className="hover:underline">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
