import React from 'react';

const Placeholder: React.FC<{ title: string }> = ({ title }) => (
  <section className="min-h-screen pt-40 pb-32 bg-cream">
    <div className="container mx-auto px-6 md:px-16">
      <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8">{title}</h1>
      <p className="text-stone-500">Coming soon.</p>
    </div>
  </section>
);

export default Placeholder;
