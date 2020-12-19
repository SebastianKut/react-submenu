import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const { btnCenter, btnBottom } = location;
    container.current.style.left = `${btnCenter}px`;
    container.current.style.top = `${btnBottom}px`;
    if (links.length === 3) setColumns('col-3');
    if (links.length > 3) setColumns('col-4');
  }, [location, columns]);

  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
