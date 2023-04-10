import React from 'react';
import './Activelink.css'
import { NavLink } from 'react-router-dom';

const Activelink = ({to ,children}) => {
    return (
        <div>
                 <NavLink
                    to={to}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {children}
                  </NavLink>
        </div>
    );
};

export default Activelink;