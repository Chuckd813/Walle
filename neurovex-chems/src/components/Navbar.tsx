import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, Search, Beaker, FlaskConical } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop All', path: '/shop' },
    { name: 'Categories', path: '/categories' },
    { name: 'COA / Testing', path: '/testing' },
    { name: 'Wholesale', path: '/wholesale' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4',
        isScrolled ? 'bg-black/80 backdrop-blur-lg border-bottom border-white/10 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-blue to-brand-violet flex items-center justify-center glow-blue transition-transform group-hover:scale-110">
            <span className="text-xs font-bold">NX</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight uppercase leading-none text-white">Neurovex</span>
            <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-semibold">Chems</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'nav-link',
                location.pathname === link.path && 'opacity-100 text-brand-cyan'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="p-2 text-white/50 hover:text-brand-cyan transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <Link to="/cart" className="w-8 h-8 rounded-full glass flex items-center justify-center cursor-pointer group hover:border-brand-cyan/50">
            <ShoppingCart className="w-4 h-4 text-white/70 group-hover:text-brand-cyan transition-colors" />
          </Link>
          <Link
            to="/login"
            className="nav-link"
          >
            Account
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-dark border-t border-white/10 p-6 flex flex-col space-y-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-brand-cyan"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <Link to="/cart" className="flex items-center space-x-2 text-white/80">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart (0)</span>
              </Link>
              <Link to="/login" className="text-brand-cyan font-semibold">
                Login / Register
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
