import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { theme } from '@/styles/theme';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 64px;
  background: ${theme.colors.bgNavbar};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.navbar};
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

const LogoText = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 20px;
  color: ${theme.colors.wojakYellow};
  letter-spacing: 0.5px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 2px;
  }
`;

const StyledNavLink = styled(Link)<{ $active?: boolean }>`
  padding: 8px 16px;
  border-radius: ${theme.radii.sm};
  font-size: 14px;
  font-weight: 600;
  color: ${(p) => (p.$active ? theme.colors.wojakYellow : theme.colors.textSecondary)};
  background: ${(p) => (p.$active ? 'rgba(245, 197, 24, 0.1)' : 'transparent')};
  transition: all 0.2s;

  &:hover {
    color: ${theme.colors.wojakYellow};
    background: rgba(245, 197, 24, 0.06);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 8px 10px;
    font-size: 13px;
  }
`;

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/info', label: 'Info & Proof' },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <Nav>
      <LogoLink href="/">
        <Image src="/logo.png" alt="Wojak.farm" width={32} height={32} style={{ borderRadius: '50%' }} />
        <LogoText>wojak.farm</LogoText>
      </LogoLink>

      <NavLinks>
        {navItems.map((item) => (
          <StyledNavLink key={item.href} href={item.href} $active={router.pathname === item.href}>
            {item.label}
          </StyledNavLink>
        ))}
      </NavLinks>
    </Nav>
  );
}
