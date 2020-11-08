import React from 'react';

export default function Header({ title }) {
  return (
    <div className="row">
      <div className="col-12">
        <h3 className="heading">{title}</h3>
      </div>
    </div>
  );
}
