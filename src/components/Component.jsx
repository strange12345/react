import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
function Component() {
  return (
    <>

    <NavLink to="/order-summary" >order summary</NavLink>
    <NavLink to="/counter" >counters</NavLink>
    <NavLink to="/todo" >todos</NavLink>
    <NavLink to="/stopwatch" >stopwatchs</NavLink>
    <NavLink to="/message" >messages</NavLink>
    
    </>
  );
}
export default Component;
