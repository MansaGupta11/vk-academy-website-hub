
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageUrl?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageUrl = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
}) => {
  return (
    <section className="relative bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 z-10 animate-slide-up">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="vk-academy-website-hub\public\uploads\vk_Academy_logo.png" 
              alt="VK Academy Logo" 
              className="h-16 w-auto"
            />
          </div>
          
          <span className="bg-vk-blue text-white text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
            {subtitle}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-vk-slate mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            {description}
          </p>
          
          {/* Offline Learning Badge */}
          <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-green-800 font-medium">In-Person Classes Available</span>
            </div>
            <p className="text-green-700 text-sm mt-1">Join our physical classroom for interactive learning</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              className="bg-vk-blue hover:bg-vk-indigo text-white px-8 py-6 text-lg font-medium"
            >
              <Link to={ctaLink}>
                {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Button 
                asChild
                variant="outline"
                className="border-vk-blue text-vk-blue hover:text-white hover:bg-vk-blue px-8 py-6 text-lg font-medium"
              >
                <Link to={secondaryCtaLink}>
                  {secondaryCtaText}
                </Link>
              </Button>
            )}
          </div>
        </div>
        
        {/* Image */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-vk-blue rounded-xl transform translate-x-4 translate-y-4 opacity-20"></div>
            <img
              src={imageUrl}
              alt="Students in classroom"
              className="relative z-10 rounded-xl shadow-lg w-full h-auto object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </div>
      
      {/* Blob Decoration */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-5">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-vk-blue" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#pattern)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
