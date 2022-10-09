import React from 'react';
import { MenuItem }from './menu-item'
import { slide as Menu } from 'react-burger-menu';
import ThemeToggleButton from './theme-toggle-button'

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
      <ThemeToggleButton class='pb-2'/>
      <Links />
    </Menu>
  );
};
