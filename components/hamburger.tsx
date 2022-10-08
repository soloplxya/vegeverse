import React from 'react';
import Link from 'next/link';

import { slide as Menu } from 'react-burger-menu';

export default (props:any) => {
  return (
    <Menu>
      <Links />
    </Menu>
  );
};

export const Links = () => (<>
  <div><Link href="/"><a className='font-bold p-4'>Home</a></Link></div>
  <div><Link href="/vote"><a className='font-bold p-4'>Vote</a></Link></div>
  <div><Link href="/propose"><a className='font-bold p-4'>Propose</a></Link></div>
  <div><Link href="/experience"><a className='font-bold p-4'>Experience</a></Link></div>
  <div><Link href="/community"><a className='font-bold p-4'>Community</a></Link></div> 
  <div><Link href="/mission"><a className='font-bold p-4'>Mission</a></Link></div>
</>)
