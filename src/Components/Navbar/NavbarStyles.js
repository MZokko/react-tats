import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({scrollNav})=>(scrollNav?'transparent':'transparent')};
box-shadow: 0 0.1rem 0.25rem 0 rgba(90, 92, 128, 0.384);

backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
padding:2.5rem;
             
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({scrollNav})=>(scrollNav?'transparent':'transparent')};
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavbarLogo = styled(LinkR)`
  color: #fff;
  background-color: ${({scrollNav})=>(scrollNav?'transparent':'transparent')};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  background: ${({scrollNav})=>(scrollNav?'transparent':'transparent')};
  @media screen and (max-width: 768px) {
    display: block;
    background: ${({scrollNav})=>(scrollNav?'transparent':'transparent')};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  background: ${({scrollNav})=>(scrollNav?'transparent':'transparent')};
  margin-right: --22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarItem = styled.li`
  height: 80px;
  background: ${({scrollNav})=>(scrollNav?'transparent':'transparent')};
`;

export const NavbarLinks = styled(LinkS)`
  color: #fff;
  background: ${({scrollNav})=>(scrollNav?'transparent':'transparent')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavbarBtn = styled.nav`
  display: flex;
  align-items: center;
  background: ${({scrollNav})=>(scrollNav?'transparent':'transparent')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: hsl(242deg 100% 70% / 61%);
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover{
      transition: all 0.2s ease-in-out;
      background:#fff;
      color: #010606;
  }
`;
