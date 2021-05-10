import React from 'react';
import { Link } from 'react-router-dom';
import './Next.css';

const Next = (props) => {
  return (
    <>
      <Link to={props.route} className="next-section">
        Próximo →
      </Link>
    </>
  );
};

export default Next;
