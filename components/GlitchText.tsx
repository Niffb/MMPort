import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

const GradientText: React.FC<GradientTextProps> = ({ text, className = '', as: Component = 'span' }) => {
  // Splitting text for potential letter-by-letter animation in future, 
  // currently treating as a single block with gradient reveal.
  return (
    <Component className={`relative inline-block ${className}`}>
      <motion.span 
        className="gradient-text bg-clip-text text-transparent bg-300% animate-gradient"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: '100% 50%' }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
      >
        {text}
      </motion.span>
    </Component>
  );
};

export default GradientText;