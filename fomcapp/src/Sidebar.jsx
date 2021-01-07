import React from 'react';
import { Link } from "react-router-dom";

const FomcSidebar = () => (
  <div>
    sidebar hereeeee!!!
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
        </ul>
      </nav>
    </div>
)

export default FomcSidebar;