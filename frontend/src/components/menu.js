import React from 'react';
export const MenuBar = () => {
  const items = ['View Devices', 'Mount', 'Foo', 'Bar', 'Baz', 'Settings'];
  return (
    <div className="menu-container">
      <section className="mce-small">
        <h3>MCE</h3>
      </section>
      <ul>
        {items.map((item) => {
          return (
            <li className="menu" key={item}>
              <span className="push-right">{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
