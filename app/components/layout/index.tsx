import React from 'react';

import './index.scss';

export const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <section className={'kto-layout-section' + ' ' + className}>
      {children}
    </section>
  );
};

export const Container: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div className="kto-layout-container">{children}</div>;
};
