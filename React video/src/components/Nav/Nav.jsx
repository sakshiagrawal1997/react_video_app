import React from 'react';
//import YoutubeLogo from './YoutubeLogo.svg';
// styles
import { NavContainer, Logo } from './navStyles';

function Nav({ children }) {
  return (
    <NavContainer>
      {children}
    </NavContainer>
  );
}
export default React.memo(Nav);
