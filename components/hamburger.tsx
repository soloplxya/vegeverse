import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default (props:any) => {
  return (
    <Menu>
      <a className="menu-item" href="/vote">
        Vote
      </a>
      <a className="menu-item" href="/propose">
        Propose
      </a>
      <a className="menu-item" href="/experience">
        Experience
      </a>
      <a className="menu-item" href="/community">
        Community
      </a>
      <a className="menu-item" href="/mission">
        Mission
      </a>
    </Menu>
  );
};
