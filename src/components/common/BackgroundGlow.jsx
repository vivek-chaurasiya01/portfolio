import React from 'react';

const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-white">
      {/* Subtle light geometric dot matrix grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04]" />
    </div>
  );
};

export default BackgroundGlow;
