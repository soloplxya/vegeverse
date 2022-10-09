import React from 'react';
import { MenuItem }from './menuitem'
import { slide as Menu } from 'react-burger-menu';


export const Links = () => (<>
  <MenuItem name="Home" href="/" /> 
  <MenuItem name="Vote" href="/vote" />
  <MenuItem name="Propose" href="/propose" /> 
  <MenuItem name="Experience" href="/experience" /> 
  <MenuItem name="Community" href="/community" /> 
  <MenuItem name="Mission" href="/mission" /> 
</>)


export default () => {
  return (
    <Menu>
      <Links />
    </Menu>
  );
};