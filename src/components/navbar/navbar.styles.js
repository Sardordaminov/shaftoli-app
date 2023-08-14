import styled from "styled-components";

export const NavbarMainStyles = {
    Navbar: styled.div`
      width: 100%;
      padding: 13px 0 50px 0;
      height: 50px;
      z-index: 4000;
      border-top: 5px solid var(--color-blue);
      background: rgba(85, 170, 246, 0.01);
      border-bottom: 1px solid rgba(128, 128, 128, 0.23);
      
      @media screen and (max-width: 820px) {
        min-height: 120px;
        height: auto;
        
        & .auth-icon{
          display: none;
        }
      }
    `,
}