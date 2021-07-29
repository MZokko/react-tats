import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
} from './SidebarStyle';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to='artist' onClick={toggle}>
          Artist
          </SidebarLink>
          <SidebarLink to='history' onClick={toggle}>
          History
          </SidebarLink>
          <SidebarLink to='brandClothing' onClick={toggle}>
          Brand Clothing
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to='/booking'>Booking In</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
