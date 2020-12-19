import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const { isSubmenuOpen, location } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const { btnCenter, btnBottom } = location;
    container.current.style.left = `${btnCenter}px`;
    container.current.style.top = `${btnBottom}px`;
  }, [location]);

  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      Submenu
    </aside>
  );
};

export default Submenu;
