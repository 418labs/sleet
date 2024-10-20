'use client';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© 2024 418Labs. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://x.com/avaxcableway" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/company/avax-cableway" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/418labs/Avax-Cableway" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Github size={20} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
