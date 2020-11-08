import React from 'react';

export default function Footer({ name }) {
  return (
    <div className="row">
      <div className="col-12 footer">
        <h3 className="heading text-center ">
          Developed by: <span>{name}</span>
        </h3>
      </div>
    </div>
  );
}
